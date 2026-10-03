import style from "./catalogWork.module.css";

import catalogWork from "./catalogWork";
import { useState } from "react";

const CatalogWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("All proect");

  const categoryNoRepeat = catalogWork.filter(
    (el, index, self) =>
      self.findIndex((item) => item.category === el.category) === index,
  );

  const filteredWork =
    selectedCategory === "All proect"
      ? catalogWork
      : catalogWork.filter((ell) => ell.category === selectedCategory);

  return (
    <section>
      <div className={`container ${style.relativecontainer}`}>
        <div className={style.catalogBox1}>
          {categoryNoRepeat.map((ell) => (
            <div key={ell.id} onClick={() => setSelectedCategory(ell.category)}>
              <div className={style.catalogBox}>
                <img src={ell.icon} alt="icon" />
                <p>{ell.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.galeryBox}>
          {filteredWork.map((ell) => (
            <div key={ell.id} className={style.card}>
              <img src={ell.img} alt="image" />
              <h5>{ell.title}</h5>
              <p>{ell.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogWork;
