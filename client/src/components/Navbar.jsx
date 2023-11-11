import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <header className={styles.header}>
        <nav className={styles.left}>
          <Link className={styles.menuBurger} to='/menu'></Link>  
        </nav>
        <a href="index.html" className={styles.logo}>
          Grouman
        </a>
        <nav className={styles.right}>
          <Link to="/login" className={[styles.button, styles.alt].join(' ')}>
            Log in
          </Link>
          <a href="#" className={[styles.button, styles.alt].join(' ')}>
            Register
          </a>
        </nav>
      </header>
    );
};