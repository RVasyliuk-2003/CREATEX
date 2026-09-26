import style from "./serviceHome.module.css";
import { NavLink } from "react-router-dom";

const ServiceHome = () => {
  return (
    <section>
      <div className="container">
        <div>
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
        <h2>
          INTERIOR <br /> DESIGN
        </h2>
        <p>
          Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. <br />
          Laoreet aenean vulputate elementum blandit amet.
        </p>
      </div>
    </section>
  );
};

export default ServiceHome;
