import styles from "./GuestEditForm.module.css";
import { useState, useEffect, useRef, useContext } from "react";

import * as guestService from "../../services/guestService";
import GuestContext from "../../contexts/guestContext";
import { useValidation } from "../../hooks/useValidation";

const validationKeys = {
  fullName: "",
  email: "",
  egn: "",
  phone: "",
  birthDate: "",
  cabin: "",
};

export default function GuestEditForm({ groupId }) {
  const { showGuestEditHandler } = useContext(GuestContext);
  const { guestId } = useContext(GuestContext);
  const { validationValues, validate, buttonToggle, setValidationValues } =
    useValidation(validationKeys);

  const guestEditSubmitHandler = async (e) => {
    e.preventDefault();

    const guestData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await guestService.edit(guestId, { ...guestData, groupId });

      showGuestEditHandler();
    } catch (error) {
      console.error("Error editing guest =>", error.message);
    }
  };

  const fullNameInputRef = useRef();
  const isMountedRef = useRef(false);

  const [guest, setGuest] = useState({
    fullName: "",
    email: "",
    egn: "",
    phone: "",
    birthDate: "",
    cabin: "",
  });

  useEffect(() => {
    guestService.getOne(guestId).then((result) => setGuest(result));
  }, [guestId]);

  useEffect(() => {
    fullNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
  }, [guest]);

  const changeHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      case "checkbox":
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
        break;
    }

    setGuest((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  return (
    <div className={styles.guestForm}>
      <h3>Edit Guest Details</h3>
      <form onSubmit={guestEditSubmitHandler}>
        <div className="row uniform">
          {/* Full name */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="fullName">Name and Surname:</label>
            <input
              ref={fullNameInputRef}
              type="text"
              name="fullName"
              id="fullName"
              value={guest.fullName}
              onChange={changeHandler}
              onBlur={() => validate("fullName", guest.fullName)}
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
              value={guest.email}
              onChange={changeHandler}
              onBlur={() => validate("email", guest.email)}
              className={validationValues.email && styles.redalert}
              placeholder="Email"
            />
            {validationValues.email && (
              <p className={styles.errorMessage}>
                {[validationValues.email]}
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
          {/* EGN */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="egn">EGN:</label>
            <input
              type="text"
              name="egn"
              id="egn"
              value={guest.egn}
              onChange={changeHandler}
              onBlur={() => validate("egn", guest.egn)}
              className={validationValues.egn && styles.redalert}
              placeholder="EGN"
            />
            {validationValues.egn && (
              <p className={styles.errorMessage}>
                {[validationValues.egn]}
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
          {/* Phone */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="phone">Mobile phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={guest.phone}
              onChange={changeHandler}
              onBlur={() => validate("phone", guest.phone)}
              className={validationValues.phone && styles.redalert}
              placeholder="Enter Phone"
            />
            {validationValues.phone && (
              <p className={styles.errorMessage}>
                {[validationValues.phone]}
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
          {/* Birthdate */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="birthDate">Passenger Birthdate:</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              value={guest.birthDate}
              onChange={changeHandler}
              onBlur={() => validate("birthDate", guest.birthDate)}
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
                value={guest.cabin}
                onChange={changeHandler}
                onBlur={() => validate("cabin", guest.cabin)}
                className={validationValues.cabin && styles.redalert}
                placeholder="Select cabin"
              >
                <option value={"default"}>- Select cabin -</option>
                <option value={"Inside"}>Inside</option>
                <option value={"Outside"}>Outside</option>
                <option value={"Balcony"}>Balcony</option>
              </select>
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
                  disabled={buttonToggle}
                  value="Save Details"
                />
              </li>
              <li>
                <input
                  type="button"
                  value="Cancel Edit"
                  className="alt"
                  onClick={() => {
                    showGuestEditHandler(), setValidationValues(validationKeys);
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
