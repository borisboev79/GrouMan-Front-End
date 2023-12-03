import "./LoginForm.css";
import { useLoginForm } from "../../hooks/useLoginForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function LoginForm({ close }) {
  const { loginSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useLoginForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  return (
    <div>
      <div className="login-wrapper" onClick={close}></div>
      <form className="login" onSubmit={onSubmit}>
      <FontAwesomeIcon  
        icon={faClose}
          className="close"
          onClick={close}
         // style={{ color: "white" }}
        />
        <h3>User Login</h3>
        <label htmlFor="email">Email:</label>
        {/* Email */}
        <div className="12u">
          <input
            type="email"
            name={LoginFormKeys.Email}
            id="email"
            value={values[LoginFormKeys.Email]}
            onChange={onChange}
            placeholder="Email"
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

        <div className="12u pass">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name={LoginFormKeys.Password}
            id="password"
            value={values[LoginFormKeys.Password]}
            onChange={onChange}
            placeholder="Password"
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

        {/* Buttons */}
        <div className="12u$ btns">
          <ul className="login-actions">
            <li>
              <input type="submit" value="Log In" />
            </li>
            <li>
              <input
                type="reset"
                value="Cancel"
                className="alt"
                onClick={close}
              />
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}
