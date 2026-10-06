import style from "./mainNews.module.css";
import mainImg from "./image/image-cover.png";

import { NavLink } from "react-router-dom";

const MainNews = () => {
  return (
    <section className={style.sectionBg}>
      <img className={style.mainImg} src={mainImg} alt="mainImg" />
      <div className="container">
        <div className={style.linkBox}>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : undefined)}
            to="/"
          >
            Homepage
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : undefined)}
            to="/NewsHome"
          >
            / News
          </NavLink>
        </div>

        <h1 className={style.h1_mainNews}>NEWS</h1>
        <p className={style.p_mainNews}>
          Stay tuned with our news, expert tips and articles.
        </p>
      </div>
    </section>
  );
};

export default MainNews;
