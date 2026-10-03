import style from "./catalogWork.module.css";

import catalogWork from "./catalogWork";

const CatalogWork = () => {
  const categoryNoRepeat = catalogWork.filter(
    (el, index, self) =>
      self.findIndex((item) => item.category === el.category) === index,
  );
  return (
    <section>
      <div className={`container ${style.relativecontainer}`}>
        <div className={style.catalogBox1}>
          {categoryNoRepeat.map((ell, id) => (
            <div key={id}>
              <div className={style.catalogBox}>
                <img src={ell.icon} alt="icon" />
                <p>{ell.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogWork;
