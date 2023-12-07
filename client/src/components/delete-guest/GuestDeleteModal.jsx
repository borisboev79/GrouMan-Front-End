import "./GuestDeleteModal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import GuestContext from "../../contexts/guestContext";
import { useContext } from "react";

export default function GuestDeleteModal({
  _id,
  fullName,
  onDelete,
}) {

  const { showDeleteHandler } = useContext(GuestContext);
  const { scrolLockToggler } = useContext(GuestContext);

  return (
    <div>
      <div
        className="guest-delete-wrapper"
        onClick={() => [showDeleteHandler(), scrolLockToggler()]}
      ></div>

      <div className="guest-delete">
        <FontAwesomeIcon icon={faClose} className="close" onClick={() => [showDeleteHandler(), scrolLockToggler()]} />
        <h3 className="guest-delete-heading">
          Are you sure you want to delete this guest?
        </h3>
        <h5>{fullName}</h5>
        {/* Buttons */}
        <div className="12u$ btns">
          <ul className="delete-actions">
            <li>
              <input
                type="submit"
                className="del"
                onClick={() => [onDelete(_id), scrolLockToggler(), showDeleteHandler()]}
                value="Delete"
              />
            </li>
            <li>
              <input
                type="reset"
                value="Cancel"
                className="alt"
                onClick={() => [showDeleteHandler(), scrolLockToggler()]}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
