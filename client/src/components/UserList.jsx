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

               
              </tbody>
              <tfoot>
                <tr>
                    
                  <td colSpan={1} />
                  <td>Active Users</td>
                  <td>{users.length}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
