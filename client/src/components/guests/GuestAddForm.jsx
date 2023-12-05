import { useParams } from "react-router-dom";
import styles from "./GuestAddForm.module.css";
import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import * as groupService from "../../services/groupService";
import * as guestService from "../../services/guestService";
import { useValidation } from "../../hooks/useValidation";

const GuestAddKey = {
  FullName: "fullName",
  Email: "email",
  EGN: "egn",
  Phone: "phone",
  Birthdate: "birthDate",
  Cabin: "cabin",
};

const validationKeys = {
  fullName: "",
  email: "",
  egn: "",
  phone: "",
  birthDate: "",
  cabin: "",
};

export default function GuestAddForm({ toggler, setState }) {
  const { groupId } = useParams();

  const addGuestSubmitHandler = async (values) => {
    const result = await guestService.add(
      values.fullName,
      values.email,
      values.egn,
      values.phone,
      values.birthDate,
      values.cabin,
      groupId
    );

    resetFormHandler();

    setState((state) => [...state, result]);

    toggler();
  };

  const { formValues, changeHandler, onSubmit, resetFormHandler } = useForm(
    addGuestSubmitHandler,
    () => {},
    {
      [GuestAddKey.FullName]: "",
      [GuestAddKey.Email]: "",
      [GuestAddKey.EGN]: "",
      [GuestAddKey.Phone]: "",
      [GuestAddKey.Birthdate]: "",
      [GuestAddKey.Cabin]: "",
    }
  );

  const { validationValues, validate, buttonToggle, setValidationValues } =
    useValidation(validationKeys);

  const fullNameInputRef = useRef();
  const isMountedRef = useRef(false);
  const [group, setGroup] = useState({});
  const [emailError, setEmailError] = useState("");
  const [stringError, setStringError] = useState("");
  const [capacity, setCapacity] = useState(group.capacity);

  useEffect(() => {
    groupService.getOne(groupId).then((result) => setGroup(result));
  }, [groupId]);

  useEffect(() => {
    fullNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
  }, [formValues]);

  const emailValidator = () => {
    if (
      !formValues[GuestAddKey.Email].includes("@") &&
      !formValues[GuestAddKey.Email].includes(".")
    ) {
      setEmailError("This is not a valid email.");
    } else {
      setEmailError("");
    }
  };

  const stringValidator = () => {
    if (formValues[GuestAddKey.Phone].length < 10) {
      setStringError("Phone should be at least 10 digits");
    } else {
      setStringError("");
    }
  };

  useEffect(() => {
    setCapacity(Number(group.capacity) - 1);

    setGroup((state) => ({
      ...state,
      capacity: String(capacity),
    }));

    try {
      async () => await groupService.edit(groupId, group);
    } catch (error) {
      console.error("Error updating group capacity =>", error.message);
    }
  }, [setState]);

  return (
    <div className={styles.guestForm}>
      <h3 className={styles.guestHeading}>Add Guest to Group</h3>
      <form onSubmit={onSubmit}>
        <div className="row uniform">
          {/* Full name */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="fullName">Name and Surname:</label>
            <input
              ref={fullNameInputRef}
              type="text"
              name="fullName"
              id="fullName"
              value={formValues[GuestAddKey.FullName]}
              onChange={changeHandler}
              onBlur={() =>
                validate("fullName", formValues[GuestAddKey.FullName])
              }
              className={validationValues.fullName && styles.redalert}
              placeholder="Name and Surname"
            />
            {validationValues.fullName && (
              <p className={styles.errorMessage}>
                {[validationValues.fullName]}
              </p>
            )}
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          {/* Email */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="email">Contact email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues[GuestAddKey.Email]}
              onChange={changeHandler}
              onBlur={() => validate("email", formValues[GuestAddKey.Email])}
              className={validationValues.email && styles.redalert}
              placeholder="Email"
            />
            {!validationValues.email && (
              <div className={styles.errorHolder}>.</div>
            )}
            {validationValues.email && (
              <p className={styles.errorMessage}>{[validationValues.email]}</p>
            )}
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          {/* EGN */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="egn">EGN:</label>
            <input
              type="text"
              name="egn"
              id="egn"
              value={formValues[GuestAddKey.EGN]}
              onChange={changeHandler}
              onBlur={() => validate("egn", formValues[GuestAddKey.EGN])}
              className={validationValues.egn && styles.redalert}
              placeholder="EGN"
            />
            {validationValues.egn && (
              <p className={styles.errorMessage}>{[validationValues.egn]}</p>
            )}
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          {/* Phone */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="phone">Mobile phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formValues[GuestAddKey.Phone]}
              onChange={changeHandler}
              onBlur={() => validate("phone", formValues[GuestAddKey.Phone])}
              className={validationValues.phone && styles.redalert}
              placeholder="Enter Phone"
            />
             {!validationValues.phone && (
              <div className={styles.errorHolder}>.</div>
            )}
            {validationValues.phone && (
              <p className={styles.errorMessage}>{[validationValues.phone]}</p>
            )}
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>
          {/* Birthdate */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="birthDate">Passenger Birthdate:</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              value={formValues[GuestAddKey.Birthdate]}
              onChange={changeHandler}
              onBlur={() =>
                validate("birthDate", formValues[GuestAddKey.Birthdate])
              }
              className={validationValues.birthDate && styles.redalert}
              placeholder="Enter date of birth"
            />
            {validationValues.birthDate && (
              <p className={styles.errorMessage}>
                {[validationValues.birthDate]}
              </p>
            )}
            <div
              data-lastpass-icon-root="true"
              style={{
                position: "relative !important",
                height: "0px !important",
                width: "0px !important",
                float: "left !important",
              }}
            />
          </div>

          {/* Cabin select */}
          <div className="6u 12u$(xsmall)">
            <div className="select-wrapper">
              <label htmlFor="cabin">Chosen cabin:</label>
              <select
                name="cabin"
                id="cabin"
                value={formValues[GuestAddKey.Cabin]}
                onChange={changeHandler}
                onBlur={() => validate("cabin", formValues[GuestAddKey.Cabin])}
                className={validationValues.cabin && styles.redalert}
                placeholder="Select cabin"
              >
                <option value={"default"}>- Select cabin -</option>
                <option value={"Inside"}>Inside</option>
                <option value={"Outside"}>Outside</option>
                <option value={"Balcony"}>Balcony</option>
              </select>
              {!validationValues.cabin && (
              <div className={styles.errorHolder}>.</div>
            )}
              {validationValues.cabin && (
                <p className={styles.errorMessage}>
                  {[validationValues.cabin]}
                </p>
              )}
            </div>
          </div>

          {/* Break */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Submit Guest"
                  disabled={buttonToggle}
                  onClick={() => setValidationValues(validationKeys)}
                />
              </li>
              <li>
                <input
                  type="reset"
                  value="Reset"
                  className="alt"
                  onClick={resetFormHandler}
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
