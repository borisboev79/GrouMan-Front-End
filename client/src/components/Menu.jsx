import styles from "./Menu.module.css";
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.links}>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
      <ul className={[styles.actions, styles.vertical].join(' ')}>
        <li>
          <Link to='/login' className={[styles.button, styles.fit].join(' ')}>
            Login
          </Link>
        </li>
        <li>
          <a href="#" className={[styles.button, styles.fit].join(' ')}>
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}
