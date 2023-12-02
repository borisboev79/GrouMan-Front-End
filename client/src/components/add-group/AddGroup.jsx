import * as groupService from "../../services/groupService";
import { Form, useNavigate } from "react-router-dom";
import styles from "./AddGroup.module.css";
import { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";

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
  // const { formValues, changeHandler, onSubmit, resetFormHandler } = useForm(
  //   {
  //     groupName: "",
  //     ship: "",
  //     itinerary: "",
  //     duration: "",
  //     capacity: "",
  //     transportation: "default",
  //     startDate: "",
  //     endDate: "",
  //     insidePrice: "",
  //     outsidePrice: "",
  //     balconyPrice: "",
  //     imageUrl: "",
  //   },
  //   async (values) => {
  //     try {
  //       await groupService.add(values);
  //       resetFormHandler;
  //       navigate("/groups");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // );

  const [priceError, setPriceError] = useState("");
  const [capacityError, setCapacityError] = useState("");

  const navigate = useNavigate();

  const groupNameInputRef = useRef();
  const isMountedRef = useRef(false);

  const [formValues, setFormValues] = useState(formInitialState);

  useEffect(() => {
    groupNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
  }, [formValues]);

  // WITHOUT CUSTOM HOOK

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
    if (formValues.duration <= 0) {
      setPriceError("Duration must be positive. Just like you :)");
    } else {
      setPriceError("");
    }
  };

  const capacityValidator = () => {
    if (formValues.capacity < 12) {
      setCapacityError("No dozen, no group");
    } else {
      setCapacityError("");
    }
  };

  //WITHOUT customHook:

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
          {/* Group Name */}
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

          {/* Ship name */}
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
          {/* Itinerary */}
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
          {/* Duration */}
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
            {priceError && <p className={styles.errorMessage}>{priceError}</p>}
          </div>
          {/* Capacity */}
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
              <select
                name="transportation"
                id="transportation"
                value={formValues.transportation}
                onChange={changeHandler}
              >
                <option value={"default"}>- Choose Transport -</option>
                <option value={"plane"}>Flight</option>
                <option value={"bus"}>Bus</option>
                <option value={"car"}>Car</option>
              </select>
            </div>
          </div>
          {/* Start date */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="startDate">Departure:</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={formValues.startDate}
              onChange={changeHandler}
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
          {/* End data */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="endDate">Return:</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formValues.endDate}
              onChange={changeHandler}
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
          {/* Inside Price */}
          <div className="4u 12u$(xsmall)">
            <label htmlFor="insidePrice">Inside Cabin Price:</label>
            <input
              type="number"
              name="insidePrice"
              id="insidePrice"
              value={formValues.insidePrice}
              onChange={changeHandler}
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
          {/* Outside Price */}
          <div className="4u 12u$(xsmall)">
            <label htmlFor="outsidePrice">Outside Cabin Price:</label>
            <input
              type="number"
              name="outsidePrice"
              id="outsidePrice"
              value={formValues.outsidePrice}
              onChange={changeHandler}
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
          {/* Balcony Price */}
          <div className="4u 12u$(xsmall)">
            <label htmlFor="balconyPrice">Balcony Cabin Price:</label>
            <input
              type="number"
              name="balconyPrice"
              id="balconyPrice"
              value={formValues.balconyPrice}
              onChange={changeHandler}
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
          {/* Image Url */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="imageUrl">ImageUrl</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={formValues.imageUrl}
              onChange={changeHandler}
              placeholder="Paste Image URL here"
            />
          </div>
          {/* Buttons */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input type="submit" value="Submit" />
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
