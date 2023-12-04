import { useContext, useEffect, useState } from "react";

import "./GuestListItem.css";
import GuestContext from "../../contexts/guestContext";
import AuthContext from "../../contexts/authContext";
import * as guestService from "../../services/guestService";
import { useNavigate, Link } from "react-router-dom";
import * as formatter from "../../utils/dateUtils";


export default function GuestListItem({
  _id,
  groupId,
  _ownerId,
  fullName,
  email,
  egn,
  phone,
  birthDate,
  cabin,
  filterGuests,
}) {
  const { guestIdSetter } = useContext(GuestContext);
  const { showEdit } = useContext(GuestContext);
  const { showGuestEditHandler } = useContext(GuestContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const guestId = _id;
  const navigate = useNavigate();

  const [toggleButtons, setToggleButtons] = useState(false);

  const toggler = () => setToggleButtons(!toggleButtons);

  useEffect(() => {
    if (!showEdit) {
      setToggleButtons(false);
    }
  }, [showEdit]);

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${fullName}?`
    );

    if (hasConfirmed) {
      await guestService.remove(guestId);

      filterGuests(guestId);
    }
  };

  return (
    <>
      <tr>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{egn}</td>
        <td>{phone}</td>
        <td>{formatter.formatDate(birthDate)}</td>
        <td>{cabin}</td>

        {isAuthenticated && userId === _ownerId && (
          <span>
            <td className="modify-buttons">
              <Link
                className="button small"
                onClick={() => {
                  showGuestEditHandler(), guestIdSetter(_id), toggler();
                }}
              >
                {!toggleButtons || !showEdit ? "Edit" : "Cancel Edit"}
              </Link>
              {(!toggleButtons || !showEdit) && (
                <a
                  className="button alt small"
                  onClick={deleteButtonClickHandler}
                >
                  Delete
                </a>
              )}
            </td>
          </span>
        )}
      </tr>
    </>
  );
}
