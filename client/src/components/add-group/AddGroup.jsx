import * as groupService from "../../services/groupService";
import { useNavigate } from "react-router-dom";
import styles from "./AddGroup.module.css";
import { useState, useEffect, useRef } from "react";
import { useValidation } from "../../hooks/useValidation";

const formInitialState = {
  groupName: "",
  ship: "",
  itinerary: "",
  duration: "",
  capacity: "",
  transportation: "default",
  startDate: "",
  endDate: "",
  insidePrice: "",
  outsidePrice: "",
  balconyPrice: "",
  imageUrl: "",
};

const validationKeys = {
  groupName: "",
  ship: "",
  itinerary: "",
  duration: "",
  capacity: "",
  transportation: "",
  startDate: "",
  endDate: "",
  insidePrice: "",
  outsidePrice: "",
  balconyPrice: "",
  imageUrl: "",
};

export default function AddGroup() {

  const navigate = useNavigate();

  const groupNameInputRef = useRef();
  const isMountedRef = useRef(false);

  const [formValues, setFormValues] = useState(formInitialState);
  const { validationValues, validate, buttonToggle, setValidationValues } =
  useValidation(validationKeys);

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

  const addGroupSubmitHandler = async (e) => {
    e.preventDefault();

    const groupData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await groupService.add(groupData);
      resetFormHandler(formInitialState);
      navigate("/groups");
    } catch (error) {
      console.error("Error adding group => ", error.message);
    }
  };

  return (
    <div className={styles.addForm}>
      <h3 className={styles.groupHeading}>Add New Cruise Group</h3>
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
              onBlur={() => validate("groupName", formValues.groupName)}
              className={validationValues.groupName && styles.redalert}
              placeholder="Group name"
            />
            {validationValues.groupName && (
              <p className={styles.errorMessage}>
                {[validationValues.groupName]}
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

          {/* Ship name */}
          <div className="6u 6u$(xsmall)">
            <label htmlFor="ship">Ship name:</label>
            <input
              type="text"
              name="ship"
              id="ship"
              value={formValues.ship}
              onChange={changeHandler}
              onBlur={() => validate("ship", formValues.ship)}
              className={validationValues.ship && styles.redalert}
              placeholder="Ship name"
            />
            {validationValues.ship && (
              <p className={styles.errorMessage}>
                {[validationValues.ship]}
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
          {/* Itinerary */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="itinerary">Itinerary</label>
            <input
              type="text"
              name="itinerary"
              id="itinerary"
              value={formValues.itinerary}
              onChange={changeHandler}
              onBlur={() => validate("itinerary", formValues.itinerary)}
              className={validationValues.itinerary && styles.redalert}
              placeholder="Itinerary"
            />
            {validationValues.itinerary && (
              <p className={styles.errorMessage}>
                {[validationValues.itinerary]}
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
          {/* Duration */}
          <div className="3u 12u$(xsmall)">
            <label htmlFor="duration">Duration:</label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={formValues.duration}
              onChange={changeHandler}
              onBlur={() => validate("duration", formValues.duration)}
              className={validationValues.duration && styles.redalert}
              placeholder="Duration"
            />
            {validationValues.duration && (
              <p className={styles.errorMessage}>
                {[validationValues.duration]}
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
          {/* Capacity */}
          <div className="3u 12u$(xsmall)">
            <label htmlFor="capacity">Group size:</label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              value={formValues.capacity}
              onChange={changeHandler}
              onBlur={() => validate("capacity", formValues.capacity)}
              className={validationValues.capacity && styles.redalert}
              placeholder="Size"
            />
            {validationValues.capacity && (
              <p className={styles.errorMessage}>
                {[validationValues.capacity]}
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
          {/* Transprtation */}
          <div className="6u$">
            <div className="select-wrapper">
              <label htmlFor="transportation">Transportation:</label>
              <select
                name="transportation"
                id="transportation"
                value={formValues.transportation}
                onChange={changeHandler}
                onBlur={() => validate("transportation", formValues.transportation)}
                className={validationValues.transportation && styles.redalert}
                placeholder="Choose transport"
              >
                <option value={"default"}>- Choose Transport -</option>
                <option value={"plane"}>Flight</option>
                <option value={"bus"}>Bus</option>
                <option value={"car"}>Car</option>
              </select>
              {validationValues.transportation && (
                <p className={styles.errorMessage}>
                  {[validationValues.transportation]}
                </p>
              )}
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
              onBlur={() => validate("startDate", formValues.startDate)}
              className={validationValues.startDate && styles.redalert}
              placeholder="Departure"
            />
            {validationValues.startDate && (
              <p className={styles.errorMessage}>
                {[validationValues.startDate]}
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
          {/* End data */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="endDate">Return:</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formValues.endDate}
              onChange={changeHandler}
              onBlur={() => validate("endDate", formValues.startDate, formValues.endDate)}
              className={validationValues.endDate && styles.redalert}
              placeholder="Return"
            />
               {!validationValues.endDate && (
              <div className={styles.errorHolder}>.</div>
            )}
            {validationValues.endDate && (
              <p className={styles.errorMessage}>
                {[validationValues.endDate]}
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
          {/* Inside Price */}
          <div className="4u 12u$(xsmall)">
            <label htmlFor="insidePrice">Inside Cabin Price:</label>
            <input
              type="number"
              name="insidePrice"
              id="insidePrice"
              value={formValues.insidePrice}
              onChange={changeHandler}
              onBlur={() => validate("insidePrice", formValues.insidePrice)}
              className={validationValues.insidePrice && styles.redalert}
              placeholder="Price in €"
            />
            {validationValues.insidePrice && (
              <p className={styles.errorMessage}>
                {[validationValues.insidePrice]}
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
          {/* Outside Price */}
          <div className="4u 12u$(xsmall)">
            <label htmlFor="outsidePrice">Outside Cabin Price:</label>
            <input
              type="number"
              name="outsidePrice"
              id="outsidePrice"
              value={formValues.outsidePrice}
              onChange={changeHandler}
              onBlur={() => validate("outsidePrice", formValues.outsidePrice)}
              className={validationValues.outsidePrice && styles.redalert}
              placeholder="Price in €"
            />
            {validationValues.outsidePrice && (
              <p className={styles.errorMessage}>
                {[validationValues.outsidePrice]}
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
          {/* Balcony Price */}
          <div className="4u 12u$(xsmall)">
            <label htmlFor="balconyPrice">Balcony Cabin Price:</label>
            <input
              type="number"
              name="balconyPrice"
              id="balconyPrice"
              value={formValues.balconyPrice}
              onChange={changeHandler}
              onBlur={() => validate("balconyPrice", formValues.balconyPrice)}
              className={validationValues.balconyPrice && styles.redalert}
              placeholder="Price in €"
            />
            {validationValues.balconyPrice && (
              <p className={styles.errorMessage}>
                {[validationValues.balconyPrice]}
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
          {/* Image Url */}
          <div className="12u 12u$(xsmall)">
            <label htmlFor="imageUrl">ImageUrl</label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              value={formValues.imageUrl}
              onChange={changeHandler}
              onBlur={() => validate("imageUrl", formValues.imageUrl)}
              className={validationValues.imageUrl && styles.redalert}
              placeholder="Paste image URL here"
            />
            {validationValues.imageUrl && (
              <p className={styles.errorMessage}>
                {[validationValues.imageUrl]}
              </p>
            )}
          </div>
          {/* Buttons */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input disabled={buttonToggle} type="submit" value="Submit" />
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
