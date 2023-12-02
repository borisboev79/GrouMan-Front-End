import { useContext } from "react";

import AuthContext from '../../contexts/authContext';
import * as guestService from '../../services/guestService';
import { useNavigate } from "react-router-dom";


export default function GuestListItem({
  _id,
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

      //navigate(0);

      // setGuests((state) => {
      //   console.log(state);
      //  state.filter(guest => guest._id !== guestId);
      // });
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
        <td> <a className="button small">
          Edit
        </a></td>
        <td> <a className="button alt small" onClick={deleteButtonClickHandler}>
          Delete
        </a></td>
        </>
        )}
      </tr>
    </>
  );
}
