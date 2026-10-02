import style from "./ourWork.module.css";
import mainimg from "./images/bg.png";

import { NavLink } from "react-router-dom";

const OurWork = () => {
  return (
    <section className={style.positionSection}>
      <div className="container">
        <div className={style.navigateLink}>
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="WorkHome"> / Work</NavLink>
          <NavLink to="Work"> / Modern Cottage</NavLink>
        </div>

        <h1 className={style.h1_ourWork}>OUR WORK</h1>
        <p className={style.p_ourWork}>
          Our portfolio represents 20 years of construction experience backed by
          <br />
          a passion for perfect client service, quality and innovations in
          <br />
          consctuction industry. <br />
        </p>
      </div>
      <img className={style.bgImg} src={mainimg} alt="mainimg" />
    </section>
  );
};

export default OurWork;
