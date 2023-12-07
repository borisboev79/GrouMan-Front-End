import "./GroupDeleteModal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import GuestContext from "../../contexts/guestContext";
import { useContext } from "react";

export default function GuestDeleteModal({
  _id,
  groupName,
  onDelete,
  showDeleteGroupToggler,
}) {

  console.log(_id);

  return (
    <div>
      <div
        className="group-delete-wrapper"
        onClick={() => {
          showDeleteHandler(), statusToggler();
        }}
      ></div>

      <div className="group-delete">
        <FontAwesomeIcon icon={faClose} className="close" onClick={showDeleteGroupToggler} />
        <h3 className="group-delete-heading">
          Are you sure you want to delete this group?
        </h3>
        <h5>{groupName}</h5>
        {/* Buttons */}
        <div className="12u$ btns">
          <ul className="delete-actions">
            <li>
              <input
                type="submit"
                className="del"
                onClick={() => [onDelete(_id), showDeleteGroupToggler()]}
                value="Delete"
              />
            </li>
            <li>
              <input
                type="reset"
                value="Cancel"
                className="alt"
                onClick={showDeleteGroupToggler}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
