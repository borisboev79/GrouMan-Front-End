import './UserRow.css';
import { officeDecoder } from '../../utils/officeDecoder';

export default function UserRow({
  _id,
  firstName,
  lastName,
  email,
  username,
  office,
  onDelete,
}) {


  const onClickRemoveHandler = () => {
    console.log('I will remove ' +  _id)
    onDelete(_id);
  };

  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{email}</td>
      <td>{username}</td>
      <td>{officeDecoder(office)}</td>
      <td>
        <a className="button small" value="Edit">
          Edit
        </a>
      </td>
      <td>
        <a className="button alt small" onClick={onClickRemoveHandler}>
          Delete
        </a>
      </td>
    </tr>
  );
}
