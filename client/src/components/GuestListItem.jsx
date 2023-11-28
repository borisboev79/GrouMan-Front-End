import { useState, useEffect } from "react";
import * as guestService from "../services/guestService";

export default function GuestListItem({groupId}) {
  const [guests, setGuests] = useState([]);
  

  console.log('This groups id is ' + groupId)

  useEffect(() => {
    guestService
      .getAllGuests()
        .then(guest => guest.groupId === groupId)
      .then((result) => setGuests(result));

      console.log(guests)
  }, [groupId]);

  return (
    <>
     <tr>
        <td>fullName</td>
        <td>email</td>
        <td>egn</td>
        <td>phone</td>
        <td>birthDate</td>
        <td>cabin</td>
      </tr>
      <tr>
        <td>{guests[0].fullName}</td>
        <td>{guests[0].email}</td>
        <td>{guests[0].egn}</td>
        <td>{guests[0].phone}</td>
        <td>{guests[0].birthDate}</td>
        <td>{guests[0].cabin}</td>
      </tr>
    </>
  );
}
