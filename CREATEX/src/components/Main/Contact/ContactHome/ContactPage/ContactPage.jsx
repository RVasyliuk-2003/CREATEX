import style from "./contactPage.module.css";
import mainImg from "./image/image-cover.png";

import { NavLink } from "react-router-dom";

const ContactPage = () => {
  return (
    <section className={style.positionSectionForImage}>
      <img className={style.mainImg} src={mainImg} alt="mainImg" />
      <div className="container">
        <div className={style.linkBox}>
          <NavLink
            className={({ isActive }) => isActive && style.linkActive}
            to="/"
          >
            Homepage
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && style.linkActive}
            to="/ContactHome"
          >
            / Contacts
          </NavLink>
        </div>
        <h1 className={style.h1_contact}>CONTACTS</h1>
        <p className={style.p_contact}>
          Contact us for all your construction needs. We always welcome <br />
          any questions and comments.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
