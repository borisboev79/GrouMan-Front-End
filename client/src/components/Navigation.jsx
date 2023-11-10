const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">OUR PRODUCTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="video.html">VIDEO GAMES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="remot.html">REMOT CONTROL</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">CONTACT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><img src="images/search-icon.png"/></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">SIGN IN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">REGISTER</a>
                </li>
              </ul>
            </div>
        </nav>
    )
};

export default Navigation;