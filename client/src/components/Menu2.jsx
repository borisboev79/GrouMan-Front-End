
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <nav >
      <ul >
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
      <ul>
        <li>
          <Link to='/login'>
            Login
          </Link>
        </li>
        <li>
          <a href="#" >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}
