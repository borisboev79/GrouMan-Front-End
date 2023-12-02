import { useParams } from "react-router-dom";
import styles from "./GuestAddForm.module.css";
import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import * as groupService from '../../services/groupService';
import * as guestService from '../../services/guestService';


const GuestAddKey = {
  FullName: "fullName",
  Email: "email",
  EGN: "egn",
  Phone: "phone",
  Birthdate: "birthDate",
  Cabin: "cabin",
}

export default function GuestAddForm({toggler, setState,}) {
  const { groupId } = useParams();

  const addGuestSubmitHandler = async (values) => {
    const result = await guestService.add(
      values.fullName,
      values.email,
      values.egn,
      values.phone,
      values.birthDate,
      values.cabin,
      groupId,
    );
      
    resetFormHandler();

    setState((state) => [...state, result]);

    toggler();
  };


  const { formValues, changeHandler, onSubmit, resetFormHandler } = useForm(addGuestSubmitHandler, () => {}, {
    [GuestAddKey.FullName]: '',
    [GuestAddKey.Email]: '',
    [GuestAddKey.EGN]: '',
    [GuestAddKey.Phone]: '',
    [GuestAddKey.Birthdate]: '',
    [GuestAddKey.Cabin]: '',


  });

  const fullNameInputRef = useRef();
  const isMountedRef = useRef(false);
  const [group, setGroup] = useState({});
  const [emailError, setEmailError] = useState("");
  const [stringError, setStringError] = useState("");


  console.log(groupId)

  useEffect(() => {
    const group = groupService.getOne(groupId);

    setGroup(group);
  }, [groupId]);


  console.log(group)



  useEffect(() => {
    fullNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log("Form is updated");
  }, [formValues]);

  const emailValidator = () => {
    if (!formValues[GuestAddKey.Email].includes("@") && !formValues[GuestAddKey.Email].includes('.')){
      setEmailError("This is not a valid email.");
    } else {
      setEmailError("");
    }
  };

  const stringValidator = () => {
    if (formValues[GuestAddKey.Phone].length < 10){
      setStringError("Phone should be at least 10 digits");
    } else {
      setStringError("");
    }
  };

  return (
    <div className={styles.guestForm}>
      <h3>Add Guest to Group</h3>
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
              placeholder="Name and Surname"
            />
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
              onBlur={emailValidator}
              className={emailError && styles.redlabel}
              placeholder="Email"
            />
            {emailError && (
              <p className={styles.errorMessage}>{emailError}</p>
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
              value={formValues[GuestAddKey.egn]}
              onChange={changeHandler}
              placeholder="EGN"
              className="redlabel"
                          />
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
              onBlur={stringValidator}
              className={stringError && styles.redlabel}
              placeholder="Enter phone"
            />
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
              placeholder="Enter dat of birth"
            />
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
              <select name="cabin" id="cabin" value={formValues[GuestAddKey.Cabin]} onChange={changeHandler}>
                <option value>- Select cabin -</option>
                <option value={"Inside"}>INSIDE</option>
                <option value={"Outside"}>OUTSIDE</option>
                <option value={"Balcony"}>BALCONY</option>
              </select>
            </div>
          </div>

          {/* Break */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input type="submit" value="Register" />
              </li>
              <li>
                <input type="reset" value="Reset" className="alt" onClick={resetFormHandler} />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
