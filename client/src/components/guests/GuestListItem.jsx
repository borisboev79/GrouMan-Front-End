import { useContext, useState } from "react";

import AuthContext from '../../contexts/authContext';
import * as guestService from '../../services/guestService';
import { useNavigate, Link } from "react-router-dom";
import GuestEditForm from "../edit-guest/GuestEditForm";


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
  const { isAuthenticated } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const guestId = _id;
  const navigate = useNavigate();

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${fullName}?`
    );

    if (hasConfirmed) {
      await guestService.remove(guestId);

      filterGuests(guestId);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    if(showModal) {
      setShowModal(false);
    }else {
      setShowModal(true);
    }
  }

  return (
    <>
      <tr>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{egn}</td>
        <td>{phone}</td>
        <td>{birthDate}</td>
        <td>{cabin}</td>
        {isAuthenticated && 
        (userId === _ownerId &&  

        <>
        <td> <Link className="button small" to={`/${groupId}/${guestId}/edit`} onClick={showModalHandler}>
          Edit
        </Link></td>
        <td> <a className="button alt small" onClick={deleteButtonClickHandler}>
          Delete
        </a></td>
        </>
        )}
      </tr>
      {showModal && <GuestEditForm toggle={showModalHandler}/>}
    </>
  );
}
