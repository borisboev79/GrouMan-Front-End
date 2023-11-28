import { useState, useEffect } from "react";
import * as guestService from "../services/guestService";
import { useParams } from "react-router-dom";

export default function GuestListItem({
  fullName,
  email,
  egn,
  phone,
  birthDate,
  cabin,
}) {
  return (
    <>
      <tr>
        <td>{fullName}</td>
        <td>{email}</td>
        <td>{egn}</td>
        <td>{phone}</td>
        <td>{birthDate}</td>
        <td>{cabin}</td>
        <td> <a className="button small">
          Edit
        </a></td>
        <td> <a className="button alt small">
          Delete
        </a></td>
      </tr>
    </>
  );
}
