import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faBuilding,

} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.contacts}>
          <li>
            <span><FontAwesomeIcon icon={faPhone} />{" "}</span>
            <a href="#">(+359) 888-9876543</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="#">boris.boev@grouman.bg</a>
          </li>
          <li>
          <FontAwesomeIcon icon={faBuilding} /> <span>Sofia 1164, Bulgaria 2000
            Building</span>
          </li>
        </ul>
        <p className={styles.copy}>
          Design by: Boris Boev & TEMPLATED November 2023 &copy;
        </p>
      </footer>
    </>
  );
}
