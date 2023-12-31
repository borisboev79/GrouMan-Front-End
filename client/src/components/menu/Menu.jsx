import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import { useContext } from "react";
import Path from "../../paths";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

export default function Menu({ toggle }) {
  const { isAuthenticated, username, userId } = useContext(AuthContext);

  return (
    <div className={styles.overlay} onClick={toggle}>
      <nav className={styles.menu}>
        <FontAwesomeIcon  
        icon={faClose}
          className={styles.close}
          onClick={toggle}
          style={{ color: "white" }}
        />
      
        <ul className={styles.links}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to={Path.Groups}>Groups</Link>
          </li>
          {/* <li>
            <Link to="/misc">Element library</Link>
          </li> */}

          <li>{isAuthenticated && <Link to="/groups/add">Add Group</Link>}</li>
          <li>
            {isAuthenticated && <Link to="/users">View and Modify Users</Link>}
          </li>
        </ul>
        <ul className={[styles.actions, styles.vertical].join(" ")}>
          <li>
            <Link
              to="/users/login"
              className={[styles.button, styles.fit].join(" ")}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/users/register"
              className={[styles.button, styles.fit].join(" ")}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
