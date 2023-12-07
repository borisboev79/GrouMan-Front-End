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

  console.log(_id);

  return (
    <div>
      <div
        className="guest-delete-wrapper"
        onClick={() => {
          showDeleteHandler(), statusToggler();
        }}
      ></div>

      <div className="guest-delete">
        <FontAwesomeIcon icon={faClose} className="close" onClick={showDeleteHandler} />
        <h3 className="guest-delete-heading">
          Are you sure you want to delete guest {fullName}?
        </h3>
        {/* Buttons */}
        <div className="12u$ btns">
          <ul className="delete-actions">
            <li>
              <input
                type="submit"
                className="del"
                onClick={() => [onDelete(_id), showDeleteHandler()]}
                value="Delete"
              />
            </li>
            <li>
              <input
                type="reset"
                value="Cancel"
                className="alt"
                onClick={showDeleteHandler}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
