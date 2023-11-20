import "./LoginForm.css";
import { useForm } from "../hooks/useForm";

export default function LoginForm({ close }) {

  const formInitialState = {
    email: "",
    password: "",
  };

  const { formValues, changeHandler, resetFormHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    async (values) => {
      try {
        await userService.add(values);
        resetFormHandler;
        navigate("/users");
      } catch (err) {
        console.log(err);
      }
    }
  );


  return (
    <div className="login-wrapper" onClick={close}>
      <form className="login" onSubmit={onSubmit}>
        <a className="icon close" onClick={close}></a>
        <h3>User Login</h3>
        <label htmlFor="email">Email:</label>
        {/* Email */}
        <div className="12u$ 12u$(xsmall)">
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={changeHandler}
            placeholder="Enter your email"
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
        <div className="row uniform">
          <div className="12u 12u$(xsmall)">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={changeHandler}
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
            <ul className="actions" style={{ paddingLeft: "15%" }}>
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
        </div>
      </form>
    </div>
  );
}
