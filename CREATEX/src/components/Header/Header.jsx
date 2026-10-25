import style from "./header.module.css";

import { NavLink, Link } from "react-router-dom";

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
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#424551" : "#8c91ab",
              })}
              to="/AboutUsHome"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#424551" : "#8c91ab",
              })}
              to="/ServicesHome"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#424551" : "#8c91ab",
              })}
              to="/WorkHome"
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#424551" : "#8c91ab",
              })}
              to="/NewsHome"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#424551" : "#8c91ab",
              })}
              to="/ContactHome"
            >
              Contacts
            </NavLink>
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
