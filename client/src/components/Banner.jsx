import styles from "./Banner.module.css";
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>Cruise Group Manager</h1>
        <div className={styles.textWrapper}>
          <p>Welcome to our cruise group managing app.</p>
          <p>You must register to add or edit groups.</p>
        </div>
        <ul className={styles.actions}>
          <li>
            <Link to='/groups'
              className={[styles.button, styles.scrolly].join(" ")}
            >
              Show All Groups
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

Banner;
