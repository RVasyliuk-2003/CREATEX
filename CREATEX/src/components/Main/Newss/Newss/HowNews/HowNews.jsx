import style from "./howNews.module.css";
import { NavLink, useParams } from "react-router-dom";

import { newsData } from "../../NewsHome/Categories/category.js";

const HowNews = () => {
  const { id } = useParams();

  console.log("ID:", id);

  const currentNews = newsData.find((ell) => ell.id === Number(id));

  console.log("CURRENT NEWS:", currentNews);

  return (
    <section>
      <div className="container">
        <div className={style.linkBox}>
          <NavLink
            className={({ isActive }) => isActive && style.active}
            to="/"
          >
            Homepage
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && style.active}
            to="/NewsHome"
          >
            / News
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && style.active}
            to="/News"
          >
            / {currentNews?.title}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HowNews;
