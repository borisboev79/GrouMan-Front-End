import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar({toggle, showLogin}) {
    return(
      <>
        <header className={styles.header}>
        <nav className={styles.left}>

          <Link className={styles.menuBurger} onClick={toggle}/>  
        </nav>
        <a href="/home" className={styles.logo}>
          Grouman
        </a>
        <nav className={styles.right}>
          <a className={[styles.button, styles.alt].join(' ')} onClick={showLogin}>
            Log in
          </a>
          <Link to="/users/register" className={[styles.button, styles.alt].join(' ')}>
            Register
          </Link>
        </nav>
      </header>
      </>
    );
};