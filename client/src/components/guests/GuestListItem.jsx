import { useContext, useState } from "react";

import GuestContext from '../../contexts/guestContext';
import AuthContext from "../../contexts/authContext";
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
  const { guestIdSetter } = useContext(GuestContext);
  const { showEdit} = useContext(GuestContext);
  const { showGuestEditHandler} = useContext(GuestContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const guestId = _id;
  const navigate = useNavigate();

  guestIdSetter(_id);




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
        <td>{birthDate}</td>
        <td>{cabin}</td>
        {isAuthenticated && 
        (userId === _ownerId &&  

        <>
        <td> <Link className="button small" 
        
        onClick={showGuestEditHandler}>{!showEdit ? "Edit" : "Cancel edit"}
          
        </Link></td>
        {!showEdit &&
        <td> <a className="button alt small" onClick={deleteButtonClickHandler}>
          Delete
        </a></td>}
        </>
        )}
      </tr>
     
    </>
  );
}
