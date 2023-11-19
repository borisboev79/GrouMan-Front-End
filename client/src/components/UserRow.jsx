export default function UserRow({firstName, lastName, email, office,}) {


  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{email}</td>
      <td>{office}</td>
      <td><a className="button small" value="Edit">Edit</a></td>
      <td><a className="button alt small">Delete</a></td>
    </tr>
  );
}
