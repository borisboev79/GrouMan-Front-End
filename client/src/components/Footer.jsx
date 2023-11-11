import styles from './Footer.module.css'

export default function Footer() {
    return(
        <>
        <footer className={styles.footer}>
        <div className={styles.inner}>
          <h2>Get In Touch</h2>
          <ul className={styles.actions}>
            <li>
              <span className="icon fa-phone" /> <a href="#">(000) 000-0000</a>
            </li>
            <li>
              <span className="icon fa-envelope" />{" "}
              <a href="#">information@untitled.tld</a>
            </li>
            <li>
              <span className="icon fa-map-marker" /> 123 Somewhere Road,
              Nashville, TN 00000
            </li>
          </ul>
        </div>
      </footer>
      <div className={styles.copyright}>
        Powered by: <a href="https://templated.co/">TEMPLATED</a>.
      </div>
      </>
    )
}