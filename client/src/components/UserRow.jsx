export default function UserRow({firstName, lastName, email, office,}) {


  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{email}</td>
      <td>{office}</td>
    </tr>
  );
}
