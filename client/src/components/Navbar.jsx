import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar({toggle,}) {
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
          <Link to="/login" className={[styles.button, styles.alt].join(' ')}>
            Log in
          </Link>
          <Link to="/mann" className={[styles.button, styles.alt].join(' ')}>
            Register
          </Link>
        </nav>
      </header>
      </>
    );
};