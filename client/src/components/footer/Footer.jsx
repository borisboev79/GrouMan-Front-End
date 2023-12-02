import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <ul className={styles.actions}>
          <li>
            <span className="icon fa-phone" />{" "}
            <a href="#">(+359) 888-9876543</a>
          </li>
          <li>
            <span className="icon fa-envelope" />{" "}
            <a href="#">boris.boev@grouman.bg</a>
          </li>
          <li>
            <span className="icon fa-map-marker" /> Sofia 1164, Bulgaria 2000
            Building
          </li>
        </ul>
        <p className={styles.copy}>
          Design by: Boris Boev & TEMPLATED November 2023 &copy;
        </p>
      </footer>
    </>
  );
}
