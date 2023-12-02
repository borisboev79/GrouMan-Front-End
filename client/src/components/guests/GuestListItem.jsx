import { useContext } from "react";

import AuthContext from '../../contexts/authContext';


export default function GuestListItem({
  fullName,
  email,
  egn,
  phone,
  birthDate,
  cabin,
}) {
  const { isAuthenticated } = useContext(AuthContext);

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
        ( 
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
