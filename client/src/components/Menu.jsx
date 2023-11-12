import styles from "./Menu.module.css";
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      
      <Link className={styles.close} to='/' style={{color: 'white'}} ></Link>
      <ul className={styles.links}>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
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
