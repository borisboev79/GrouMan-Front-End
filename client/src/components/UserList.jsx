import "./UserList.css";
import { useState, useEffect } from "react";
import * as userService from "../services/userService";
import UserRow from "./UserRow";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAllUsers()
      .then((result) => setUsers(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="users-row 200%">
        <div className="12u inner">
          {/* Table */}
          <h3>Registered Users</h3>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Office</th>
                </tr>
              </thead>
              <tbody>

                {users.map(user => <UserRow key={user._id} {...user}  />)}

                <tr>
                  <td>Item 4</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 5</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2} />
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
