import style from "./aboutHome.module.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";

import { Link } from "react-router-dom";
import AboutUs from "../../AboutUs/AboutUs";

const AboutHome = () => {
  return (
    <section
      className={style.maxSizeSection}
      style={{ backgroundColor: "#F4F5F6" }}
    >
      <div className="container">
        <div className={style.relativeBox}>
          <div className={style.HeroContainer}>
            <span>
              <Link to="/">Homepage</Link>/<Link to="/about-us">About Us</Link>
            </span>

            <h1>ABOUT US</h1>

            <p>
              Createx Construction Bureau has been successfully operating in the
              USA construction market since 2000. We are proud to offer you
              quality construction and exemplary service.
            </p>
          </div>
        </div>
      </div>
      <img className={style.img1} src={img1} alt="img1" />
      <img className={style.img2} src={img2} alt="img2" />
    </section>
  );
};

export default AboutHome;
