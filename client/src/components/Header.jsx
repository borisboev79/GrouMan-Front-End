import styles from './Header.module.css'

export default function Header() {
    return(
        <header className={styles.header}>
        <nav className={styles.left}>
          <a href="#menu">
            <span>Menu</span>
          </a>
        </nav>
        <a href="index.html" className={styles.logo}>
          Grouman
        </a>
        <nav className={styles.right}>
          <a href="#" className={[styles.button, styles.alt].join(' ')}>
            Log in
          </a>
          <a href="#" className={[styles.button, styles.alt].join(' ')}>
            Register
          </a>
        </nav>
      </header>
    );
};