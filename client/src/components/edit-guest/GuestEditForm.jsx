import { useNavigate, useParams } from "react-router-dom";
import styles from "./GuestEditForm.module.css";
import { useState, useEffect, useRef, useContext } from "react";

import * as groupService from "../../services/groupService";
import * as guestService from "../../services/guestService";
import AuthContext from "../../contexts/authContext";
import GuestContext from "../../contexts/guestContext";

export default function GuestEditForm({ groupId }) {
  const navigate = useNavigate();

  const { showGuestEditHandler } = useContext(GuestContext);
  const { guestId } = useContext(GuestContext);

  const guestEditSubmitHandler = async (e) => {
    e.preventDefault();

    const guestData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await guestService.edit(guestId, { ...guestData, groupId });

      showGuestEditHandler();
    } catch (error) {
      console.error("Error editing guest =>", error.message);
    }
  };

  const fullNameInputRef = useRef();
  const isMountedRef = useRef(false);

  const [guest, setGuest] = useState({
    fullName: "",
    email: "",
    egn: "",
    phone: "",
    birthDate: "",
    cabin: "",
  });
  const [group, setGroup] = useState({});

  useEffect(() => {
    groupService.getOne(groupId).then((result) => setGroup(result));
  }, [groupId]);

  useEffect(() => {
    guestService.getOne(guestId).then((result) => setGuest(result));
  }, [guest]);

  useEffect(() => {
    fullNameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
  }, [guest]);

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

    setGroup((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  return (
    // <div className={styles.editWrapper} onClick={toggle}>
    <div className={styles.guestForm}>
      <h3>Edit Guest Details</h3>
      <form onSubmit={guestEditSubmitHandler}>
        <div className="row uniform">
          {/* Full name */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="fullName">Name and Surname:</label>
            <input
              ref={fullNameInputRef}
              type="text"
              name="fullName"
              id="fullName"
              defaultValue={guest.fullName}
              onChange={changeHandler}
              placeholder="Name and Surname"
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
          {/* Email */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="email">Contact email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={guest.email}
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
          {/* EGN */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="egn">EGN:</label>
            <input
              type="text"
              name="egn"
              id="egn"
              defaultValue={guest.egn}
              onChange={changeHandler}
              placeholder="EGN"
              className="redlabel"
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
          {/* Phone */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="phone">Mobile phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={guest.phone}
              onChange={changeHandler}
              placeholder="Enter phone"
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
          {/* Birthdate */}
          <div className="6u 12u$(xsmall)">
            <label htmlFor="birthDate">Passenger Birthdate:</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              defaultValue={guest.birthDate}
              onChange={changeHandler}
              placeholder="Enter dat of birth"
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

          {/* Cabin select */}
          <div className="6u 12u$(xsmall)">
            <div className="select-wrapper">
              <label htmlFor="cabin">Chosen cabin:</label>
              <select
                name="cabin"
                id="cabin"
                defaultValue={guest.cabin}
                onChange={changeHandler}
              >
                <option value>- Select cabin -</option>
                <option value={"Inside"}>Inside</option>
                <option value={"Outside"}>Outside</option>
                <option value={"Balcony"}>Balcony</option>
              </select>
            </div>
          </div>

          {/* Break */}
          <div className="12u$">
            <ul className="actions">
              <li>
                <input type="submit" value="Save Details" />
              </li>
              <li>
                <input
                  type="button"
                  value="Cancel Edit"
                  className="alt"
                  onClick={showGuestEditHandler}
                />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
    // </div>
  );
}
