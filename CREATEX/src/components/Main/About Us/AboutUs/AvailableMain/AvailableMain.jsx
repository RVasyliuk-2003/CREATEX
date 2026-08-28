import style from "./availableMain.module.css";
import mainImg from "./images/main.png";
import { NavLink } from "react-router-dom";

const AvailableMain = () => {
  return (
    <section className={style.sectionBoxForImg}>
      <div className="container">
        <div className={style.mainContainer}>
          <NavLink to="/" end>
            Homepage
          </NavLink>
          <NavLink
            to="/AboutUsHome"
            style={({ isActive }) => ({
              color: isActive ? "#9A9CA5" : "#424551",
            })}
          >
            / About Us
          </NavLink>
          <NavLink
            to="/about-us"
            style={({ isActive }) => ({
              color: isActive ? "#9A9CA5" : "#424551",
            })}
          >
            / Available Positions
          </NavLink>
          <h1>
            AVAILABLE <br /> POSITIONS
          </h1>
          <p>Build your career with Createx Construction Bureau.</p>
        </div>
      </div>
      <img className={style.mainImg} src={mainImg} alt="mainImg" />
    </section>
  );
};

export default AvailableMain;
