import style from "./categories.module.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { categories, newsData } from "./category.js";

const Categories = () => {
  const [category, setCategory] = useState("All News");

  return (
    <section>
      <div className="container">
        <h1 className={style.h1_categories}>Categories</h1>
        <div className={style.categoriesBox}>
          {categories.map((cat, id) => (
            <NavLink className={style.categorBtn} key={id}>
              {cat}
            </NavLink>
          ))}
        </div>

        <div className={style.blogContainer}>
          {newsData.map((ell) => (
            <Link className={style.blogBox} key={ell.id}>
              <img src={ell.image} alt={ell.date} />
              <div className={style.infoNewsBox}>
                <h5>{ell.title}</h5>

                <p className={style.p_data}>
                  {ell.category} | {ell.date} |{" "}
                  {ell.comments.length > 0
                    ? ell.comments.length
                    : "No comments"}
                  comments
                </p>
                <p className={style.p_excerpt}>{ell.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
