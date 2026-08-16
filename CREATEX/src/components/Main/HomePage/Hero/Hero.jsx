import style from "./hero.module.css";

import line from "./images/Line.svg";
import line2 from "./images/Line2.svg";

import RequestModal from "../../RequestForm/RequestModal";

const Hero = ({ setRequestMdl }) => {
  return (
    <section className={`containerForImgBacground ${style.heroBg}`}>
      <div className={style.LineBtnForSlider}>
        <button>
          <img src={line} alt="line" />
        </button>
        <button>
          <img src={line2} alt="line2" />
        </button>
      </div>

      <div className="container">
        <div className={style.mainContainer}>
          <h1>
            CREATE<span>X</span> <br /> CONSTRUCTION
          </h1>
          <p>
            Cras ultrices leo vitae non viverra. Fringilla nisi quisque <br />
            consequat, dignissim vitae proin ipsum sed. Pellentesque nec <br />{" "}
            turpis purus eget pellentesque integer ipsum elementum felis.
          </p>
          <div className={style.btnBox}>
            <button className={style.btnLEARN}>LEARN MORE ABOUT US</button>
            <button
              onClick={() => setRequestMdl(true)}
              className={style.btnSUBMIT}
            >
              SUBMIT REQUEST
            </button>
          </div>

          <div className={style.switchContainer}>
            <div className={style.switch}>
              <p>01</p>
            </div>
            <div className={style.switch}>
              <p>02</p>
            </div>
            <div className={style.switch}>
              <p>03</p>
            </div>
            <div className={style.switch}>
              <p>04</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
