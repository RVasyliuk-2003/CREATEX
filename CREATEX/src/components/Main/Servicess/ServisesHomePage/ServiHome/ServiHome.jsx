import style from "./serviHome.module.css";
import mainImg from "./images/main.png";

import { NavLink } from "react-router-dom";

const ServiHome = () => {
  return (
    <section className={style.secBox}>
      <img className={style.mainImg} src={mainImg} alt="mainImg" />
      <div className="container">
        <div className={style.mainContainer}>
          <div>
            <NavLink>Homepage </NavLink>
            <NavLink>/ Services </NavLink>
            <NavLink>/ Interior Design </NavLink>
          </div>

          <h2>SERVICES</h2>
          <p>
            If you are looking for a full-service construction company, look
            to Createx Construction Bureau. We are doing our best
            to be a partner for all of your construction needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiHome;
