import styles from "./UserEditForm.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as userService from "../../services/userService";
import { useValidation } from "../../hooks/useValidation";

const validationKeys = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  office: "",
};

export default function UserEditForm() {
  const { userId } = useParams();
  const userNameInputRef = useRef();
  const isMountedRef = useRef(false);
  const navigate = useNavigate();

  const { validationValues, validate, buttonToggle, setValidationValues } =
    useValidation(validationKeys);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    office: "",
  });

  useEffect(() => {
    userService.getOne(userId).then((result) => {
      setUser(({...result, confirmPassword: result.password}));
    });
  }, [userId]);

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

    setUser((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const editSubmitHandler = async (e) => {
    e.preventDefault();

    const userData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      
      const _id = userId;
  
      await userService.edit(userId, {...userData, _id});

      navigate(-1);
    } catch (error) {
      console.error("Error editing user =>", error.message);
    }
  };

  const onCancelClick = () => { 
    navigate(-1);
    setValidationValues(validationKeys);
  };

  useEffect(() => {
    userNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
  }, [user]);

  return (
    <div className={styles.registerForm}>
      <h3>Modify User Details</h3>
      <form onSubmit={editSubmitHandler}>
        <div className="row uniform">
          {/* First name */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="firstName">First name:</label>
            <input
              ref={userNameInputRef}
              type="text"
              name="firstName"
              id="firstName"
              value={user.firstName}
              onChange={changeHandler}
              onBlur={() =>
                validate("firstName", user.firstName)
              }
              className={validationValues.firstName && styles.redalert}
              placeholder="First name"
            />
            {validationValues.firstName && (
              <p className={styles.errorMessage}>
                {[validationValues.firstName]}
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
          {/* Last name */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={user.lastName}
              onChange={changeHandler}
              onBlur={() =>
                validate("lastName", user.lastName)
              }
              className={validationValues.lastName && styles.redalert}
              placeholder="Last name"
            />
            {validationValues.lastName && (
              <p className={styles.errorMessage}>
                {[validationValues.lastName]}
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
          <div className="12u 12u$(xsmall)">
            <label htmlFor="email">User email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              onChange={changeHandler}
              onBlur={() =>
                validate("email", user.email)
              }
              className={validationValues.email && styles.redalert}
              placeholder="Email"
            />
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
          {/* Username */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={user.username}
              onChange={changeHandler}
              onBlur={() =>
                validate("username", user.username)
              }
              className={validationValues.username && styles.redalert}
              placeholder="Username"
            />
            {validationValues.username && (
              <p className={styles.errorMessage}>
                {[validationValues.username]}
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
          {/* Password */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="password">Choose password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={changeHandler}
              onBlur={() =>
                validate("password", user.password)
              }
              className={validationValues.password && styles.redalert}
              placeholder="Password"
            />
            {validationValues.password && (
              <p className={styles.errorMessage}>
                {[validationValues.password]}
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
          {/* Confirm password */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={changeHandler}
              onBlur={() =>
                validate(
                  "confirmPassword",
                  user.password,
                  user.confirmPassword
                )
              }
              className={validationValues.confirmPassword && styles.redalert}
              placeholder="Confirm Password"
            />
            {validationValues.confirmPassword && (
              <p className={styles.errorMessage}>
                {[validationValues.confirmPassword]}
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

          {/* Office select */}
          <div className="12u$">
            <div className="select-wrapper">
              <label htmlFor="office">Office:</label>
              <select
                name="office"
                id="office"
                value={user.office}
                onChange={changeHandler}
                onBlur={() =>
                  validate("office", user.office)
                }
                className={validationValues.office && styles.redalert}
              >
                <option value={"default"}>- Select office -</option>
                <option value={"SOFR"}>Sofia Central</option>
                <option value={"MOS"}>Mall of Sofia</option>
                <option value={"PDV"}>Plovdiv</option>
              </select>
              {validationValues.office && (
                <p className={styles.errorMessage}>
                  {[validationValues.office]}
                </p>
              )}
            </div>
          </div>

          {/* Break */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input
                  disabled={buttonToggle}
                  type="submit"
                  value="Save Changes"
                />
              </li>
              <li>
                <input
                  type="button"
                  value="Cancel"
                  className="alt"
                  onClick={onCancelClick}
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
