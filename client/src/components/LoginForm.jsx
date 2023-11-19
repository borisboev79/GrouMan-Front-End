import "./LoginForm.css";

export default function LoginForm() {
  return (
    <div className="wrapper">

      <form className="login">
             <a className="icon close"></a> 
        <h3>User Login</h3>
        <label htmlFor="email">Email:</label>
        <div className="12u$ 12u$(xsmall)">
          <input
            type="email"
            name="email"
            id="email"
            defaultValue
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

        <div className="row uniform">
          <div className="12u 12u$(xsmall)">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue
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

       
          {/* Break */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input type="submit" defaultValue="Send Message" />
              </li>
              <li>
                <input type="reset" defaultValue="Reset" className="alt" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
