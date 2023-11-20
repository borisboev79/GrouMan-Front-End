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

  const removeHandler = (userId) => {
    userService.remove(userId);

    setUsers((state) => state.filter((u) => u._id !== userId));
  }

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
                  <th>Username</th>
                  <th>Office</th>
                  <th colSpan={3} style={{textAlign: 'center'}}>Commands</th>
                  

                </tr>
              </thead>
              <tbody>

                {users.map(user => <UserRow key={user._id} onDelete={removeHandler} {...user}   />)}

               
              </tbody>
              <tfoot>
                <tr>
                    
                  <td colSpan={4} />
                  <td style={{textAlign: 'right', fontWeight: '700'}} >Active Users</td>
                  <td style={{textAlign: 'right', fontWeight: '700', color: '#25a2c3'}}>{users.length}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
