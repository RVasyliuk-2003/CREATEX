import style from "./figeres.module.css";

import circle0 from "./images/circleProgress.png";
import circle1 from "./images/circle-progress1.png";
import circle2 from "./images/circle-progress2.png";
import circle3 from "./images/circle-progress3.png";
import background from "./images/background.png";

const Figures = () => {
  return (
    <section className={style.overHidd}>
      <div className="container">
        <div className={style.facrsMainContainer}>
          <img
            className={style.backgroundImage}
            src={background}
            alt="background"
          />
          <h2>Some facts and figures</h2>
          <div className={style.facrsBox}>
            <div className={style.facts}>
              <img src={circle0} alt="circle0" />
              <p>Totally satisfied clients</p>
            </div>
            <div className={style.facts}>
              <img src={circle1} alt="circle1" />
              <p>Years of experience</p>
            </div>
            <div className={style.facts}>
              <img src={circle2} alt="circle2" />
              <p>Working hours spent</p>
            </div>
            <div className={style.facts}>
              <img src={circle3} alt="circle3" />
              <p>Succeeded projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Figures;
