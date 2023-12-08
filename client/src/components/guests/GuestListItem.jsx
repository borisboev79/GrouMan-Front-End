import "./GuestListItem.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GuestContext from "../../contexts/guestContext";
import AuthContext from "../../contexts/authContext";

import * as formatter from "../../utils/dateUtils";


export default function GuestListItem({
  _id,
  _ownerId,
  fullName,
  email,
  egn,
  phone,
  birthDate,
  cabin,
}) {
  const { guestIdSetter } = useContext(GuestContext);
  const { showEdit } = useContext(GuestContext);
  const { scrolLockToggler } = useContext(GuestContext);

  const { showDeleteHandler } = useContext(GuestContext);
  const { showGuestEditHandler } = useContext(GuestContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
 
  const [toggleButtons, setToggleButtons] = useState(false);

  const toggler = () => setToggleButtons(!toggleButtons);

  useEffect(() => {
    if (!showEdit) {
      setToggleButtons(false);
    }
  }, [showEdit]);

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
          <>
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
                
                  onClick={() => [showDeleteHandler(), guestIdSetter(_id), scrolLockToggler()]}
                  
                >
                  Delete
                </a>
              )}
            </td>
          </>
        )}
      </tr>
    </>
  );
}
