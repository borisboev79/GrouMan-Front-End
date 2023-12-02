import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useEffect, useRef, useContext } from "react";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { useValidation } from "../../hooks/useValidation";

const RegisterFormKeys = {
  FirstName: "firstName",
  LastName: "lastName",
  Email: "email",
  Username: "username",
  Password: "password",
  ConfirmPassword: "confirmPassword",
  Office: "office",
};

const validationKeys = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    office: "",
  }


export default function RegisterForm() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { localRegister } = useContext(AuthContext);
 const userNameInputRef = useRef();
  const isMountedRef = useRef(false);

  const { formValues, changeHandler, onSubmit, resetFormHandler } = useForm(
    registerSubmitHandler,
    localRegister,
    {
      [RegisterFormKeys.FirstName]: "",
      [RegisterFormKeys.LastName]: "",
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Username]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
      [RegisterFormKeys.Office]: "",
    }
  );

  const { validationValues, validate, buttonToggle, setValidationValues, } = useValidation(validationKeys);

  useEffect(() => {
    userNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
  }, [formValues]);

  const onResetClick = () => {
    resetFormHandler();
    setValidationValues(validationKeys);
  }


  return (
    <div className={styles.registerForm}>
      <h3>Register New User</h3>
      <form onSubmit={onSubmit}>
        <div className="row uniform">
          {/* First name */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="firstName">First name:</label>
            <input
              ref={userNameInputRef}
              type="text"
              name="firstName"
              id="firstName"
              value={formValues[RegisterFormKeys.FirstName]}
              onChange={changeHandler}
              onBlur={() =>
                validate("firstName", formValues[RegisterFormKeys.FirstName])
              }
              className={validationValues.firstName && styles.redlabel}
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
              value={formValues[RegisterFormKeys.LastName]}
              onChange={changeHandler}
              onBlur={() =>
                validate("lastName", formValues[RegisterFormKeys.LastName])
              }
              className={validationValues.lastName && styles.redlabel}
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
              value={formValues[RegisterFormKeys.Email]}
              onChange={changeHandler}
              onBlur={() => validate("email", formValues[RegisterFormKeys.Email])}
              className={validationValues.email && styles.redlabel}
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
              value={formValues[RegisterFormKeys.Username]}
              onChange={changeHandler}
              onBlur={() =>
                validate("username", formValues[RegisterFormKeys.Username])
              }
              className={validationValues.username && styles.redlabel}
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
              value={formValues[RegisterFormKeys.Password]}
              onChange={changeHandler}
              onBlur={() =>
                validate("password", formValues[RegisterFormKeys.Password])
              }
              className={validationValues.password && styles.redlabel}
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
              value={formValues[RegisterFormKeys.ConfirmPassword]}
              onChange={changeHandler}
              onBlur={() =>
                validate("confirmPassword", formValues[RegisterFormKeys.Password], formValues[RegisterFormKeys.ConfirmPassword])
              }
              className={validationValues.confirmPassword && styles.redlabel}
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
                value={formValues[RegisterFormKeys.Office]}
                onChange={changeHandler}
                onBlur={() =>
                  validate("office", formValues[RegisterFormKeys.Office])
                }
                className={validationValues.office && styles.redlabel}
              >
                      
                <option value="default">- Select office -</option>
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
                  disabled={ buttonToggle }
                  type="submit"
                  value="Register"
                />
              </li>
              <li>
                <input
                  type="reset"
                  value="Reset"
                  className="alt"
                  onClick={onResetClick}
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
