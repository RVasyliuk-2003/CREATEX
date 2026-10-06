import style from "./categories.module.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { categories, newsData } from "./category.js";

const Categories = () => {
  const [category, setCategory] = useState("All News");

  const renderCategor = newsData.filter(
    (ell) => category === "All News" || ell.category === category,
  );

  return (
    <section>
      <div className="container">
        <h1 className={style.h1_categories}>Categories</h1>
        <div className={style.categoriesBox}>
          {categories.map((cat, id) => (
            <div
              className={
                category === cat ? style.linkActive : style.linkNoActive
              }
              onClick={() => setCategory(cat)}
              key={id}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className={style.blogContainer}>
          {renderCategor.map((ell) => (
            <Link
              to={`/News/${ell.id}`}
              target="blank"
              className={style.blogBox}
              key={ell.id}
            >
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
