import "./UserDeleteModal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function UserDeleteModal({
  close,
  _id,
  firstName,
  lastName,
  onDelete,
}) {
  return (
    <div>
      <div
        className="delete-wrapper"
        onClick={() => {
          close(), statusToggler();
        }}
      ></div>

      <div className="delete">
        <FontAwesomeIcon icon={faClose} className="close" onClick={close} />
        <h3 className="delete-heading">
          Are you sure you want to delete user {firstName} {lastName}?
        </h3>
        {/* Buttons */}
        <div className="12u$ btns">
          <ul className="delete-actions">
            <li>
              <input
                type="submit"
                onClick={() => [onDelete(_id), close()]}
                value="Delete"
              />
            </li>
            <li>
              <input
                type="reset"
                value="Cancel"
                className="alt"
                onClick={close}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
