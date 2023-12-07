import "./UserList.css";
import { useState, useEffect } from "react";
import * as userService from "../../services/userService";
import * as authService from "../../services/authService";
import UserRow from "./UserRow";
import UserDeleteModal from "../delete-user/UserDeleteModal";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});
  const [userId, setUserId] = useState("");

  const getOneHandler = () => {
    if (Object.keys(loggedUser).length === 0) {
      authService.getMe().then((result) => setLoggedUser(result));

      return loggedUser;
    } else {
      setLoggedUser({});
    }
  };

  useEffect(() => {
    userService
      .getAllUsers()
      .then((result) => setUsers(result))
      .catch((error) =>
        console.error("Error fething users => ", error.message)
      );
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const userIdHandler = (userId) => {
    setUserId(userId);
  };

  useEffect(() => {
    userService.getOne(userId).then((result) => setUser(result));
  }, [userId]);

  const filterUsers = (userId) => {
    setUsers((state) => state.filter((u) => u._id !== userId));
  };

  const deleteButtonClickHandler = async (id) => {
    try {
      await userService.remove(id);
      filterUsers(id);
    } catch {
      (error) => console.error("Error deleting user => ", error.message);
    }
  };

  return (
    <>
      {showModal && (
        <UserDeleteModal
        //  userId={user._id}
          close={closeModalHandler}
          onDelete={deleteButtonClickHandler}
          {...user}
        />
      )}
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
                  <th colSpan={3} style={{ textAlign: "center" }}>
                    Commands
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserRow
                    key={user._id}
                    showModalHandler={showModalHandler}
                    setUserId={userIdHandler}
                    {...user}
                  />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} />
                  <td style={{ textAlign: "right", fontWeight: "700" }}>
                    Active Users
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: "700",
                      color: "#25a2c3",
                    }}
                  >
                    {users.length}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="12u inner">
        {/* Table */}
        <h3>Active Session User</h3>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
                <th>Office</th>
                <th style={{ textAlign: "center" }}>Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{loggedUser._id}</td>
                <td>{loggedUser.email}</td>
                <td>{loggedUser.username}</td>
                <td>{loggedUser.office}</td>

                <td>
                  <a className="button small" onClick={getOneHandler}>
                    {Object.keys(loggedUser).length === 0 ? "Show" : "Hide"}
                  </a>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </>
  );
}
