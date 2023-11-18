import * as userService from "../services/userService";
import { Form, useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";
import { useState, useEffect, useRef } from "react";

const formInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export default function RegisterForm() {
  const userNameInputRef = useRef();
  const isMountedRef = useRef(false);
  const [formValues, setFormValues] = useState(formInitialState);
  const [priceError, setPriceError] = useState("");
  const [capacityError, setCapacityError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    userNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log("Form is updated");
  }, [formValues]);

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
  

  setFormValues((state) => ({
    ...state,
    [e.target.name]: value,
  }));
};

  const resetFormHandler = () => {
    setFormValues(formInitialState);
  };

  

  const priceValidator = () => {

    if(formValues.duration <= 0) {

        setPriceError('Duration must be positive. Just like you :)');

      }else {
        setPriceError('');
    }
    
  }

  const capacityValidator = () => {

    if(formValues.capacity < 12) {
    
        setCapacityError('No dozen, no group');

      }else {
        setCapacityError('');
    }
    
  }
  




  const addGroupSubmitHandler = async (e) => {
    e.preventDefault();

    const groupData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await groupService.add(groupData);
      resetFormHandler(formInitialState);
      navigate("/groups");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.registerForm}>
      <h3>Add New Cruise Group</h3>
      <form onSubmit={addGroupSubmitHandler}>
        <div className="row uniform">
          <div className="12u 12u$(xsmall)">
            <label htmlFor="firstName">First name:</label>
            <input
              ref={userNameInputRef}
              type="text"
              name="firstName"
              id="firstName"
              value={formValues.firstName}
              onChange={changeHandler}
              placeholder="First name"
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
          <div className="12u 12u$(xsmall)">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formValues.lastName}
              onChange={changeHandler}
              placeholder="Last name"
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

          <div className="12u 12u$(xsmall)">
            <label htmlFor="email">User email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={changeHandler}
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
   

          <div className="12u 12u$(xsmall)">
            <label htmlFor="password">Choose password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.email}
              onChange={changeHandler}
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

          
          <div className="12u 12u$(xsmall)">
            <label htmlFor="repeatPassword">Repeat password:</label>
            <input
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              value={formValues.email}
              onChange={changeHandler}
              placeholder="Repeat password"
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
              <label htmlFor="transportation">Office:</label>
              <select name="transportation" id="transportation">
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
                <input type="reset" value="Reset" className="alt" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}
