import style from "./mapWork.module.css";

import australia from "./images/australia.png";
import canada from "./images/canada.png";
import china from "./images/china.png";
import ukraine from "./images/ukraine.png";
import usa from "./images/usa.png";
import germany from "./images/germany.png";

const MapWork = () => {
  return (
    <section className={style.backgroundColorSection}>
      <div className="container">
        <div className={style.mainContainerWorld}>
          <h2>We work worldwide</h2>

          <div className={style.imgMapbackground}>
            <img className={style.australia} src={australia} alt="australia" />
            <img className={style.canada} src={canada} alt="canada" />
            <img className={style.china} src={china} alt="china" />
            <img className={style.ukraine} src={ukraine} alt="ukraine" />
            <img className={style.usa} src={usa} alt="usa" />
            <img className={style.germany} src={germany} alt="germany" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapWork;
