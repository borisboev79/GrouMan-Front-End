import * as groupService from "../services/groupService";
import { Form, useNavigate } from "react-router-dom";
import styles from "./AddGroup.module.css";
import { useState, useEffect, useRef } from "react-router-dom";

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

export default function AddGroup({ formRef }) {
  const groupNameInputRef = useRef();
  const isMountedRef = useRef(false);

  const [formValues, setFormValues] = useState(formInitialState);

  const [numberError, setNumberError] = useState("");

  useEffect(() => {
    groupNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    console.log('Form is updated')

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

    




  const navigate = useNavigate();

  const addGroupSubmitHandler = async (e) => {
    e.preventDefault();

    const groupData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await groupService.add(groupData);

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
              type="text"
              name="groupName"
              id="groupName"
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue
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
          </div>
          <div className="3u 12u$(xsmall)">
            <label htmlFor="capacity">Group size:</label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              defaultValue="Size"
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
