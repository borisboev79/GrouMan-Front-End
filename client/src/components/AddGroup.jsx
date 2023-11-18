import * as groupService from "../services/groupService";
import { Form, useNavigate } from "react-router-dom";
import styles from "./AddGroup.module.css";
import { useState, useEffect, useRef } from "react";

const formInitialState = {
  groupName: "",
  ship: "",
  itinerary: "",
  duration: "",
  capacity: "",
  startDate: "",
  endDate: "",
  insidePrice: "",
  outsidePrice: "",
  balconyPrice: "",
  imageUril: "",
};

export default function AddGroup() {
  const groupNameInputRef = useRef();
  const isMountedRef = useRef(false);
  const [formValues, setFormValues] = useState(formInitialState);
  const [priceError, setPriceError] = useState("");
  const [capacityError, setCapacityError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    groupNameInputRef.current.focus();
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

    if(formValues.capacity <= 0) {
    
        setCapacityError('We dont make empty groups :)');

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
    <div className={styles.addForm}>
      <h3>Add New Cruise Group</h3>
      <form onSubmit={addGroupSubmitHandler}>
        <div className="row uniform">
          <div className="6u 12u$(xsmall)">
            <label htmlFor="groupName">Group name:</label>
            <input
              ref={groupNameInputRef}
              type="text"
              name="groupName"
              id="groupName"
              value={formValues.groupName}
              onChange={changeHandler}
              placeholder="Group name"
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
          <div className="6u 6u$(xsmall)">
            <label htmlFor="ship">Ship name:</label>
            <input
              type="text"
              name="ship"
              id="ship"
              value={formValues.ship}
              onChange={changeHandler}
              placeholder="Ship name"
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
            <label htmlFor="itinerary">Itinerary</label>
            <input
              type="text"
              name="itinerary"
              id="itinerary"
              value={formValues.itinerary}
              onChange={changeHandler}
              placeholder="Itinerary"
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
          <div className="3u 12u$(xsmall)">
            <label htmlFor="duration">Duration:</label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={formValues.duration}
              onChange={changeHandler}
              onBlur={priceValidator}
              className={priceError && styles.inputError}
              placeholder="Duration"
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
            {priceError && (
            <p className={styles.errorMessage}>{priceError}</p>
        )}
          </div>
          <div className="3u 12u$(xsmall)">
            <label htmlFor="capacity">Group size:</label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              value={formValues.capacity}
              onChange={changeHandler}
              onBlur={capacityValidator}
             className={capacityError && styles.inputError}
              placeholder="Size"
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

{capacityError && (
            <p className={styles.errorMessage}>{capacityError}</p>
        )}
          </div>
          {/* Transprtation */}
          <div className="6u$">
            <div className="select-wrapper">
              <label htmlFor="transportation">Transportation:</label>
              <select name="transportation" id="transportation">
                <option value>- Choose Transport -</option>
                <option value={"plane"}>Flight</option>
                <option value={"bus"}>Bus</option>
                <option value={"car"}>Car</option>
              </select>
            </div>
          </div>

          <div className="6u 12u$(xsmall)">
            <label htmlFor="startDate">Departure:</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              defaultValue=""
              placeholder="From"
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
          <div className="6u 12u$(xsmall)">
            <label htmlFor="endDate">Return:</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              defaultValue
              placeholder="To"
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
          <div className="4u 12u$(xsmall)">
            <label htmlFor="insidePrice">Inside Cabin Price:</label>
            <input
              type="number"
              name="insidePrice"
              id="insidePrice"
              defaultValue
              placeholder="Price in €"
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

          <div className="4u 12u$(xsmall)">
            <label htmlFor="outsidePrice">Outside Cabin Price:</label>
            <input
              type="number"
              name="outsidePrice"
              id="outsidePrice"
              defaultValue
              placeholder="Price in €"
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

          <div className="4u 12u$(xsmall)">
            <label htmlFor="balconyPrice">Balcony Cabin Price:</label>
            <input
              type="number"
              name="balconyPrice"
              id="balconyPrice"
              defaultValue
              placeholder="Price in €"
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
            <label htmlFor="imageUrl">ImageUrl</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              defaultValue=""
              placeholder="Paste Image URL here"
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
