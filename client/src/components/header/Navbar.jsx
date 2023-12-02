import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import { useContext } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ toggle, showLogin }) {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.left}>
          {/* <Link className={styles.menuBurger} onClick={toggle} /> */}
          <FontAwesomeIcon as Link className={styles.menuBurger} onClick={toggle} icon={faBars} />
        </nav>
        <a href="/home" className={styles.logo}>
          Grouman
        </a>
        
        {!isAuthenticated && (
          <nav className={styles.right}>
            <Link
              to="/users/login"
              className={[styles.button, styles.alt].join(" ")}
              onClick={showLogin}
            >
              Log in
            </Link>
            <Link
              to="/users/register"
              className={[styles.button, styles.alt].join(" ")}
            >
              Register
            </Link>
          </nav>
        )}

        {isAuthenticated && (
          <nav className={styles.right}>
         
            <Link to="/logout" className={[styles.button, styles.alt].join(" ")}>
              Logout <span>{username} </span>
            </Link>
           
          </nav>
        )}
        
      </header>
    </>
  );
}
