import { Form, useNavigate, useParams } from "react-router-dom";
import styles from "./GuestAddForm.module.css";
import { useState, useEffect, useRef, useCallback, useContext } from "react";
import { useForm } from "../hooks/useForm";
import AuthContext from "../contexts/authContext";
import * as groupService from '../services/groupService';

const GuestAddKey = {
  FullName: "fullName",
  Email: "email",
  EGN: "username",
  Phone: "password",
  Birthdate: "birthDate",
  Cabin: "office",
}

export default function GuestAddForm() {

  const {registerSubmitHandler} = useContext(AuthContext);
  const { groupId } = useParams();


  const { formValues, changeHandler, onSubmit, resetFormHandler } = useForm(registerSubmitHandler, {}, {
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
  const navigate = useNavigate();

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
    if (!formValues[GuestAddKey.Email].includes("@")){
      setEmailError("This is not a valid email.");
    } else {
      setEmailError("");
    }
  };

  const stringValidator = () => {
    if (formValues[GuestAddKey.Password].length < 12){
      setStringError("Password should be at least 8 characters");
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
           {/* Username */}
           <div className="6u 12u$(xsmall)">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formValues[GuestAddKey.Username]}
              onChange={changeHandler}
              placeholder="Username"
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
          {/* Password */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="password">Choose password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues[GuestAddKey.Password]}
              onChange={changeHandler}
              onBlur={stringValidator}
              className={stringError && styles.redlabel}
              placeholder="Enter password"
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
          {/* Confirm password */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="birthDate">Confirm password:</label>
            <input
              type="password"
              name="birthDate"
              id="birthDate"
              value={formValues[GuestAddKey.ConfirmPassword]}
              onChange={changeHandler}
              placeholder="Confirm password"
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

          {/* Office select */}
          <div className="12u$">
            <div className="select-wrapper">
              <label htmlFor="office">Office:</label>
              <select name="office" id="office" value={formValues[GuestAddKey.Office]} onChange={changeHandler}>
                <option value>- Select office -</option>
                <option value={"SOFR"}>Sofia Central</option>
                <option value={"MOS"}>Mall of Sofia</option>
                <option value={"PDV"}>Plovdiv</option>
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
