export default function Footer() {
    return(
        <>
        <footer id="footer">
        <div className="inner">
          <h2>Get In Touch</h2>
          <ul className="actions">
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
      <div className="copyright">
        Powered by: <a href="https://templated.co/">TEMPLATED</a>.
      </div>
      </>
    )
}