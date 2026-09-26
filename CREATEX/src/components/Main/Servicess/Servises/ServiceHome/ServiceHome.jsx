import style from "./serviceHome.module.css";
import { NavLink } from "react-router-dom";

const ServiceHome = () => {
  return (
    <section
      className={style.maxSizeSection}
      style={{ backgroundColor: "#F4F5F6" }}
    >
      <div className="container">
        <div className={style.links}>
          <NavLink to="/">Homepage</NavLink>
          <NavLink
            to="/ServicesHome"
            style={({ isActive }) => ({
              color: isActive ? "#9A9CA5" : "#424551",
            })}
          >
            / Services
          </NavLink>
          <NavLink
            to="/Service"
            style={({ isActive }) => ({
              color: isActive ? "#9A9CA5" : "#424551",
            })}
          >
            / Interior Design
          </NavLink>
        </div>
        <h2 className={style.mainH2}>
          INTERIOR <br /> DESIGN
        </h2>
        <p className={style.mainP}>
          Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. <br />
          Laoreet aenean vulputate elementum blandit amet.
        </p>
      </div>
      <img className={style.imgBg} src="/imgBg.png" alt="bg" />
    </section>
  );
};

export default ServiceHome;
