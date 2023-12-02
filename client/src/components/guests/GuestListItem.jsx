import { useContext } from "react";

import AuthContext from '../../contexts/authContext';


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
  const { isAuthenticated } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);

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
        <td> <a className="button alt small">
          Delete
        </a></td>
        </>
        )}
      </tr>
    </>
  );
}
