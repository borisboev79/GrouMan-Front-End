import styles from "./Menu.module.css";

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
          <a href="#" className={[styles.button, styles.fit].join(' ')}>
            Login
          </a>
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
