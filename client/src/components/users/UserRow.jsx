import "./UserRow.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { officeDecoder } from "../../utils/officeDecoder";
import GuestContext from "../../contexts/guestContext";

export default function UserRow({
  _id,
  firstName,
  lastName,
  email,
  username,
  office,
  showModalHandler,
  setUserId,
}) {

  const { scrolLockToggler } = useContext(GuestContext);

  return (
    <>
      <tr>
        <td>
          {firstName} {lastName}
        </td>
        <td>{email}</td>
        <td>{username}</td>
        <td>{officeDecoder(office)}</td>
        <td>
          <Link className="button small" to={`/users/edit/${_id}`} value="Edit">
            Edit
          </Link>
        </td>
        <td>
          <Link
            className="button alt small"
            onClick={() => [setUserId(_id), showModalHandler(), scrolLockToggler()]}
          >
            Delete
          </Link>
        </td>
      </tr>
    </>
  );
}
