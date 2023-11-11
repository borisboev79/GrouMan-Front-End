export default function Banner() {
    return(
      <section id="banner">
      <div className="content">
        <h1>Cruise Group Manager</h1>
        <div className={styles.textWrapper}>
        <p>
          Welcome to our cruise group managing app.
          <br />
          You must register to add or edit groups.
        </p>
        </div>
        <ul className="actions">
          <li>
            <a href="#one" className="button scrolly">
              Show All Groups
            </a>
          </li>
        </ul>
      </div>
    </section>
    );
};

 Banner;