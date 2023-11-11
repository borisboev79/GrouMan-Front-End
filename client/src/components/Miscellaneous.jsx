export default function Miscellaneous() {
    return(
        <>
        <section id="main" className="wrapper">
        <div className="inner">
          <header className="align-center">
            <h1>Elements</h1>
            <p>Aliquam erat volutpat nam dui </p>
          </header>
          {/* Content */}
          <h2 id="content">Sample Content</h2>
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
              <h3>Interdum sapien gravida</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="4u 12u$(medium)">
              <h3>Faucibus consequat lorem</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
            <div className="4u$ 12u$(medium)">
              <h3>Accumsan montes viverra</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
                odio porttitor sem non mi integer non faucibus ornare mi ut ante
                amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
                accumsan varius montes viverra nibh in adipiscing blandit tempus
                accumsan.
              </p>
            </div>
          </div>
          <hr className="major" />
          {/* Elements */}
          <h2 id="elements">Elements</h2>
          <div className="row 200%">
            <div className="12u">
              {/* Text stuff */}
              <h3>Text</h3>
              <p>
                This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
                <i>italic</i> and this is <em>emphasized</em>. This is{" "}
                <sup>superscript</sup> text and this is <sub>subscript</sub>{" "}
                text. This is <u>underlined</u> and this is code:{" "}
                <code>
                  for (;;) {"{"} ... {"}"}
                </code>
                .
              </p>
              <hr />
              <h2>Heading Level 2</h2>
              <h3>Heading Level 3</h3>
              <h4>Heading Level 4</h4>
              <h5>Heading Level 5</h5>
              <h6>Heading Level 6</h6>
              <hr />
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
                  <h4>Unordered</h4>
                  <ul>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Sagittis adipiscing lorem eleifend.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ul>
                  <h4>Alternate</h4>
                  <ul className="alt">
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Sagittis adipiscing lorem eleifend.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ul>
                </div>
                <div className="6u$ 12u$(small)">
                  <h4>Ordered</h4>
                  <ol>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Etiam vel felis at lorem sed viverra.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                    <li>Dolor pulvinar etiam magna etiam.</li>
                    <li>Etiam vel felis at lorem sed viverra.</li>
                    <li>Felis enim feugiat dolore viverra.</li>
                  </ol>
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
              <h4>Definition</h4>
              <dl>
                <dt>Item 1</dt>
                <dd>
                  <p>
                    Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                    vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                    adipiscing accumsan eu faucibus. Integer ac pellentesque
                    praesent.
                  </p>
                </dd>
                <dt>Item 2</dt>
                <dd>
                  <p>
                    Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                    vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                    adipiscing accumsan eu faucibus. Integer ac pellentesque
                    praesent.
                  </p>
                </dd>
                <dt>Item 3</dt>
                <dd>
                  <p>
                    Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                    vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                    adipiscing accumsan eu faucibus. Integer ac pellentesque
                    praesent.
                  </p>
                </dd>
              </dl>
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
              {/* Blockquote */}
              <h3>Blockquote</h3>
              <blockquote>
                Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt
                felis sagittis eget tempus euismod. Vestibulum ante ipsum primis
                in faucibus vestibulum. Blandit adipiscing eu felis iaculis
                volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum
                primis in faucibus vestibulum. Blandit adipiscing eu felis.
              </blockquote>
              {/* Table */}
              <h3>Table</h3>
              <h4>Default</h4>
              <div className="table-wrapper">
                <table>
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
              {/* Form */}
              <h3>Form</h3>
              <form method="post" action="#">
                <div className="row uniform">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue
                      placeholder="Name"
                    />
                    <div
                      data-lastpass-icon-root="true"
                      style={{
                        position: "relative !important",
                        height: "0px !important",
                        width: "0px !important",
                        float: "left !important",
                      }}
                    />
                  </div>
                  <div className="6u$ 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue
                      placeholder="Email"
                    />
                  </div>
                  {/* Break */}
                  <div className="12u$">
                    <div className="select-wrapper">
                      <select name="category" id="category">
                        <option value>- Category -</option>
                        <option value={1}>Manufacturing</option>
                        <option value={1}>Shipping</option>
                        <option value={1}>Administration</option>
                        <option value={1}>Human Resources</option>
                      </select>
                    </div>
                  </div>
                  {/* Break */}
                  <div className="4u 12u$(small)">
                    <input
                      type="radio"
                      id="priority-low"
                      name="priority"
                      defaultChecked
                    />
                    <label htmlFor="priority-low">Low Priority</label>
                  </div>
                  <div className="4u 12u$(small)">
                    <input type="radio" id="priority-normal" name="priority" />
                    <label htmlFor="priority-normal">Normal Priority</label>
                  </div>
                  <div className="4u$ 12u$(small)">
                    <input type="radio" id="priority-high" name="priority" />
                    <label htmlFor="priority-high">High Priority</label>
                  </div>
                  {/* Break */}
                  <div className="6u 12u$(small)">
                    <input type="checkbox" id="copy" name="copy" />
                    <label htmlFor="copy">
                      Email me a copy of this message
                    </label>
                  </div>
                  <div className="6u$ 12u$(small)">
                    <input
                      type="checkbox"
                      id="human"
                      name="human"
                      defaultChecked
                    />
                    <label htmlFor="human">I am a human and not a robot</label>
                  </div>
                  {/* Break */}
                  <div className="12u$">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Enter your message"
                      rows={6}
                      data-gramm="false"
                      wt-ignore-input="true"
                      defaultValue={""}
                    />
                  </div>
                  {/* Break */}
                  <div className="12u$">
                    <ul className="actions">
                      <li>
                        <input type="submit" defaultValue="Send Message" />
                      </li>
                      <li>
                        <input
                          type="reset"
                          defaultValue="Reset"
                          className="alt"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
              <hr />
              <form method="post" action="#">
                <div className="row uniform">
                  <div className="9u 12u$(small)">
                    <input
                      type="text"
                      name="query"
                      id="query"
                      defaultValue
                      placeholder="Query"
                    />
                  </div>
                  <div className="3u$ 12u$(small)">
                    <input
                      type="submit"
                      defaultValue="Search"
                      className="fit"
                    />
                  </div>
                </div>
              </form>
              {/* Image */}
              <h3>Image</h3>
              <h4>Fit</h4>
              <span className="image fit">
                <img src="images/pic02.jpg" alt="" width={418} height={200} />
              </span>
              <div className="box alt">
                <div className="row 50% uniform">
                  <div className="4u">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  <div className="4u">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  <div className="4u$">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  {/* Break */}
                  <div className="4u">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  <div className="4u">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  <div className="4u$">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  {/* Break */}
                  <div className="4u">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  <div className="4u">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                  <div className="4u$">
                    <span className="image fit">
                      <img
                        src="images/pic01.jpg"
                        alt=""
                        width={330}
                        height={330}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <h4>Left &amp; Right</h4>
              <p>
                <span className="image left">
                  <img src="images/pic01.jpg" alt="" width={330} height={330} />
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
              <p>
                <span className="image right">
                  <img src="images/pic01.jpg" alt="" width={330} height={330} />
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
              {/* Preformatted Code */}
              <h3>Preformatted</h3>
              <pre>
                <code>
                  i = 0;{"\n"}
                  {"\n"}while (!deck.isInOrder()) {"{"}
                  {"\n"}
                  {"    "}print 'Iteration ' + i;{"\n"}
                  {"    "}deck.shuffle();{"\n"}
                  {"    "}i++;{"\n"}
                  {"}"}
                  {"\n"}
                  {"\n"}print 'It took ' + i + ' iterations to sort the deck.';
                  {"\n"}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Generic */}
        <section id="main" className="wrapper">
          <div className="inner">
            <header className="align-center">
              <h1>Generic Page</h1>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <div className="image fit">
              <img src="images/pic04.jpg" alt="" />
            </div>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing blandit tempus
              accumsan.
            </p>
            <p>
              {" "}
              Aenean iaculis, neque sed pretium egestas, nunc lacus tempus enim,
              nec tincidunt urna massa a libero. Aenean mattis bibendum est, a
              pharetra elit. Morbi commodo lectus quis blandit mattis. Cras
              pharetra quam quis tincidunt tempus. Donec a sem magna. Nullam
              purus purus, fermentum id lorem sit amet, porta elementum neque.
              Proin vulputate metus ac faucibus luctus.
            </p>
            <p>
              Ut congue purus sed elit consectetur tempus. Duis convallis, quam
              quis pellentesque vestibulum, tellus arcu hendrerit ante, sed
              dictum felis nisl vitae magna. Integer et sapien a erat molestie
              tempor. Cras est odio, suscipit id porttitor id, mollis et ligula.
              Curabitur molestie mi molestie accumsan faucibus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Integer porta malesuada pellentesque. Morbi imperdiet
              dictum velit, eu volutpat sem posuere non. Fusce ullamcorper
              gravida velit, sed sollicitudin libero iaculis id. Ut eu neque non
              odio fringilla faucibus nec quis neque. Quisque et nisi fermentum,
              tincidunt libero a, condimentum ligula. Quisque ultrices blandit
              lacinia. Nulla velit lorem, placerat nec eros ut, fermentum
              pharetra dolor. Maecenas arcu ipsum, mattis et suscipit sed,
              convallis nec lectus. Nulla facilisi. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae;{" "}
            </p>
          </div>
        </section>
      </section>
      </>
    )
}