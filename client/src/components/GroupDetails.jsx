import "./groupDetails.css";

export default function GroupDetails() {
  return (
    <>
      <section id="main" className="wrapper">
        <div className="inner">

        <h2 id="content">Sample Content</h2>
          {/* Image */}
          <h3>Image</h3>
          <h4>Fit</h4>
          <span className="image fit">
            <img src="/images/pic02.jpg" alt="" width={418} height={400} />
          </span>

          {/* Content */}
     
          <p>
            Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem
            sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus
            justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus
            odio magna tempus adipiscing a non. In mi primis arcu ut non
            accumsan vivamus ac blandit adipiscing adipiscing arcu metus
            praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing
            eget accumsan ac nunc adipiscing adipiscing.
          </p>
          <div className="row">
            <div className="6u 12u$(small)">
              <h3>Sem turpis amet semper</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat commodo eu sed ante lacinia.
                Sapien a lorem in integer ornare praesent commodo adipiscing
                arcu in massa commodo lorem accumsan at odio massa ac ac. Semper
                adipiscing varius montes viverra nibh in adipiscing blandit
                tempus accumsan.
              </p>
            </div>
            <div className="6u$ 12u$(small)">
              <h3>Magna odio tempus commodo</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
                aliquet. Accumsan ac integer lobortis commodo ornare aliquet
                accumsan erat tempus amet porttitor. Ante commodo blandit
                adipiscing integer semper orci eget. Faucibus commodo adipiscing
                mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac
                praesent.
              </p>
            </div>
            {/* Break */}
            <div className="4u 12u$(medium)">
              <h3>1</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="4u 12u$(medium)">
              <h3>2</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="4u$ 12u$(medium)">
              <h3>3</h3>
              <h4>Alternate</h4>
              <ul className="alt">
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Sagittis adipiscing lorem eleifend.</li>
                <li>Felis enim feugiat dolore viverra.</li>
              </ul>
            </div>
            <div className="6u$ 12u$(small)"></div>
          </div>
          <hr className="major" />
          {/* Elements */}
          <h2 id="elements">Elements</h2>
          <div className="row 200%">
            <div className="12u">
             
             
              <header>
                <h2>Heading with a Subtitle</h2>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
              <header>
                <h3>Heading with a Subtitle</h3>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
              <header>
                <h4>Heading with a Subtitle</h4>
                <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
              </header>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
              {/* Lists */}
              <h3>Lists</h3>
              <div className="row">
                <div className="6u 12u$(small)">
                  <h4>Alternate</h4>
                  <ul className="alt">
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Sagittis adipiscing lorem eleifend.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ul>
                </div>
                <div className="6u$ 12u$(small)">
                  <h4>Icons</h4>
                  <ul className="icons">
                    <li>
                      <a href="#" className="icon fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon fa-github">
                        <span className="label">Github</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon fa-dribbble">
                        <span className="label">Dribbble</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon fa-tumblr">
                        <span className="label">Tumblr</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <h4>Actions</h4>
              <ul className="actions">
                <li>
                  <a href="#" className="button special">
                    Default
                  </a>
                </li>
                <li>
                  <a href="#" className="button">
                    Default
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt">
                    Default
                  </a>
                </li>
              </ul>
              <ul className="actions small">
                <li>
                  <a href="#" className="button special small">
                    Small
                  </a>
                </li>
                <li>
                  <a href="#" className="button small">
                    Small
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt small">
                    Small
                  </a>
                </li>
              </ul>
              <div className="row">
                <div className="3u 12u$(small)">
                  <ul className="actions vertical">
                    <li>
                      <a href="#" className="button special">
                        Default
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button">
                        Default
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button alt">
                        Default
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="3u 12u$(small)">
                  <ul className="actions vertical small">
                    <li>
                      <a href="#" className="button special small">
                        Small
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button small">
                        Small
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button alt small">
                        Small
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="3u 12u$(small)">
                  <ul className="actions vertical">
                    <li>
                      <a href="#" className="button special fit">
                        Default
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button fit">
                        Default
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button alt fit">
                        Default
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="3u$ 12u$(small)">
                  <ul className="actions vertical small">
                    <li>
                      <a href="#" className="button special small fit">
                        Small
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button small fit">
                        Small
                      </a>
                    </li>
                    <li>
                      <a href="#" className="button alt small fit">
                        Small
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Table */}
              <h3>Table</h3>

              <h4>Alternate</h4>
              <div className="table-wrapper">
                <table className="alt">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Item 1</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item 2</td>
                      <td>Vis ac commodo adipiscing arcu aliquet.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item 3</td>
                      <td> Morbi faucibus arcu accumsan lorem.</td>
                      <td>29.99</td>
                    </tr>
                    <tr>
                      <td>Item 4</td>
                      <td>Vitae integer tempus condimentum.</td>
                      <td>19.99</td>
                    </tr>
                    <tr>
                      <td>Item 5</td>
                      <td>Ante turpis integer aliquet porttitor.</td>
                      <td>29.99</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2} />
                      <td>100.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="12u">
              {/* Buttons */}
              <h3>Buttons</h3>
              <ul className="actions">
                <li>
                  <a href="#" className="button special">
                    Special
                  </a>
                </li>
                <li>
                  <a href="#" className="button">
                    Default
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt">
                    Alternate
                  </a>
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <a href="#" className="button special big">
                    Big
                  </a>
                </li>
                <li>
                  <a href="#" className="button">
                    Default
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt small">
                    Small
                  </a>
                </li>
              </ul>
              <ul className="actions fit">
                <li>
                  <a href="#" className="button special fit">
                    Fit
                  </a>
                </li>
                <li>
                  <a href="#" className="button fit">
                    Fit
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt fit">
                    Fit
                  </a>
                </li>
              </ul>
              <ul className="actions fit small">
                <li>
                  <a href="#" className="button special fit small">
                    Fit + Small
                  </a>
                </li>
                <li>
                  <a href="#" className="button fit small">
                    Fit + Small
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt fit small">
                    Fit + Small
                  </a>
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <a href="#" className="button special icon fa-search">
                    Icon
                  </a>
                </li>
                <li>
                  <a href="#" className="button icon fa-download">
                    Icon
                  </a>
                </li>
                <li>
                  <a href="#" className="button alt icon fa-check">
                    Icon
                  </a>
                </li>
              </ul>
              <ul className="actions">
                <li>
                  <span className="button special disabled">Special</span>
                </li>
                <li>
                  <span className="button disabled">Default</span>
                </li>
                <li>
                  <span className="button alt disabled">Alternate</span>
                </li>
              </ul>

              <h4>Left &amp; Right</h4>
              <p>
                <span className="image left">
                  <img
                    src="/images/pic01.jpg"
                    alt=""
                    width={330}
                    height={330}
                  />
                </span>
                Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt
                felis sagittis eget. tempus euismod. Vestibulum ante ipsum
                primis in faucibus vestibulum. Blandit adipiscing eu felis
                iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
                pellentesque praesent tincidunt felis sagittis eget. tempus
                euismod. Vestibulum ante ipsum primis sagittis eget. tempus
                euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                accumsan eu faucibus. Integer ac pellentesque praesent tincidunt
                felis sagittis eget. tempus euismod. Vestibulum ante ipsum
                primis in faucibus vestibulum. Blandit adipiscing eu felis
                iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
                pellentesque praesent. Vestibulum ante ipsum primis in faucibus
                magna blandit adipiscing eu felis iaculis volutpat lorem ipsum
                dolor sit amet dolor consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
