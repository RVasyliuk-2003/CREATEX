import style from "./footer.module.css";
import Whatsapp from "././images/Whatsapp.svg";
import Messanger from "././images/Messanger.svg";
import Facebook from "././images/Facebook.svg";
import Twitter from "././images/Twitter.svg";
import YouTube from "././images/YouTube.svg";
import logo from "././images/logo.svg";

import Heart from "././images/Heart.svg";
import Line from "././images/Line.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.mainBoxFtr}>
      <footer className="container">
        <div className={style.topBox}>
          <div className={style.logoContainer}>
            <div className={style.logoContainerChild}>
              <Link to="/Home">
                <img src={logo} alt="logo" />
              </Link>

              <div className={style.iconMedia}>
                <a href="#">
                  <img src={Whatsapp} alt="Whatsapp" />
                </a>
                <a href="#">
                  <img src={Messanger} alt="Messanger" />
                </a>
                <a href="#">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={YouTube} alt="YouTube" />
                </a>
              </div>
            </div>
            <p>
              Createx Construction Bureau has been successfully operating in the
              USA <br />
              construction market since 2000. We are proud to offer you quality{" "}
              <br />
              construction and exemplary service. Our mission is to set the
              highest <br />
              standards for construction sphere.
            </p>
          </div>
          <div className={style.inputMailContainer}>
            <h5>Let’s stay in touch</h5>
            <div className={style.containerbtnInput}>
              <button>SUBSCRIBE</button>
              <input type="email" placeholder="Your email address " />
            </div>
            <p>
              *Subscribe to our newsletter to receive communications and early
              updates from Createx <br /> Construction Bureau.
            </p>
          </div>
        </div>

        <div className={style.contactContainer}>
          <div className={`${style.contactBox} ${style.contactsInfo}`}>
            <h6>HEAD OFFICE</h6>
            <p>
              <span>Address:</span>
              <a href="8502 Preston Rd. Inglewood, New York">
                8502 Preston Rd. Inglewood, New York
              </a>
            </p>
            <p>
              <span>Call:</span>
              <a href="tel:4055550128">(405) 555-0128</a>
            </p>
            <p>
              <span>Email:</span>
              <a href="mailto:hello@createx.com">hello@createx.com</a>
            </p>
          </div>

          <div className={style.contactBox}>
            <h6>HEAD OFFICE</h6>
            <Link to="/AboutUsHome">About Us</Link>
            <Link to="/AboutUs">Available Positions</Link>
            <Link to="/ContactsHome">Contacts</Link>
          </div>

          <div className={style.contactBox}>
            <h6>OUR EXPERIENCE</h6>
            <Link to="/AboutUsHome">Services</Link>
            <Link to="/WorkHome">Work</Link>
            <Link to="/NewsHome">News</Link>
          </div>
        </div>

        <div className={style.downBox}>
          <a href="#">
            © All rights reserved. Made with by <img src={Heart} alt="Heart" />
            Createx Studio
          </a>

          <div className={style.goToTopBox}>
            <Link to="/">GO TO TOP</Link>
            <button>
              <img src={Line} alt="Line" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
