import "./UserDeleteModal.css";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import GuestContext from "../../contexts/guestContext";

export default function UserDeleteModal({
  close,
  _id,
  firstName,
  lastName,
  onDelete,
}) {

  const { scrolLockToggler } = useContext(GuestContext);

  return (
    <div>
      <div
        className="delete-wrapper"
        onClick={() => [close(), scrolLockToggler()]}
      ></div>

      <div className="delete">
        <FontAwesomeIcon icon={faClose} className="close" onClick={() => [close(), scrolLockToggler()]} />
        <h3 className="delete-heading">
          Are you sure you want to delete this user?
        </h3>
        <h5>
          {firstName} {lastName}
        </h5>
        {/* Buttons */}
        <div className="12u$ btns">
          <ul className="delete-actions">
            <li>
              <input
                type="submit"
                className="del"
                onClick={() => [onDelete(_id), close(), scrolLockToggler()]}
                value="Delete"
              />
            </li>
            <li>
              <input
                type="reset"
                value="Cancel"
                className="alt"
                onClick={() => [close(), scrolLockToggler()]}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
