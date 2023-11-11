import styles from "./Banner.module.css";

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
            <a
              href="#one"
              className={[styles.button, styles.scrolly].join(" ")}
            >
              Show All Groups
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

Banner;
