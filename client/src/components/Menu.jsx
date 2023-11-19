import styles from "./Menu.module.css";
import { Link, NavLink } from 'react-router-dom'

export default function Menu({toggle,}) {


  return (
    <div className={styles.overlay} onClick={toggle}>
    <nav className={styles.menu}>
      
      <a className={styles.close} onClick={toggle} style={{color: 'white'}} ></a>
      <ul className={styles.links}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/misc">Element library</Link>
        </li>
        <li>
          <Link to="/groups/add">Add Group</Link>
        </li>
        <li>
          <Link to="/users">View and Modify Users</Link>
        </li>
      </ul>
      <ul className={[styles.actions, styles.vertical].join(' ')}>
        <li>
          <Link to='/users/login' className={[styles.button, styles.fit].join(' ')}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/users/register" className={[styles.button, styles.fit].join(' ')}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}
