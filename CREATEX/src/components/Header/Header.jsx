import style from "./header.module.css";

import { Link } from "react-router-dom";

import logo from "./images/logo.svg";
import chat from "./images/Chat.svg";
import iphone from "./images/iPhone.svg";

const Header = () => {
  return (
    <div>
      <nav className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <ul>
          <li>
            <Link to="/AboutUsHome">About Us</Link>
          </li>
          <li>
            <Link to="/ServicesHome">Services</Link>
          </li>
          <li>
            <Link to="/WorkHome">Work</Link>
          </li>
          <li>
            <Link to="/NewsHome"> News</Link>
          </li>
          <li>
            <Link to="/ContactHome"> Contacts</Link>
          </li>
        </ul>
        <div className={style.contactHead}>
          <div>
            <img src={iphone} alt="Iphone" />
            <div>
              <p>Call us</p>
              <a href="#">(405) 555-0128</a>
            </div>
          </div>
          <div>
            <img src={chat} alt="Chat" />
            <div>
              <p>Talk to us</p>
              <a href="#">hello@createx.com</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
