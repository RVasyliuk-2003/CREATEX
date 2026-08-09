import style from "./ourWork.module.css";

import Left from "./images/Line.svg";
import Right from "./images/Line2.svg";

import Building1 from "./images/image.png";
import Building2 from "./images/image2.png";
import Building3 from "./images/image3.jpg";

const OurWork = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainWorkContainer}>
          <div className={style.mainTextWorkContainer}>
            <h2>
              Browse our selected projects <br /> and learn more about our work
            </h2>
            <div className={style.mainTextBtnSliderBox}>
              <button>
                <img src={Left} alt="Left" />
              </button>
              <button>
                <img src={Right} alt="Right" />
              </button>
            </div>
          </div>

          <div className={style.mainCartSliderBox}>
            <div className={style.cartSlider}>
              <img src={Building1} alt="Building1" />
              <div>
                <h5>Red Finger Building</h5>
                <p>Business Centers</p>
              </div>
            </div>
            <div className={style.cartSlider}>
              <img src={Building2} alt="Building2" />
              <div>
                <h5>Cubes Building</h5>
                <p>Business Centers</p>
              </div>
            </div>
            <div className={style.cartSlider}>
              <img src={Building3} alt="Building3" />
              <div>
                <h5>The Pencil Building</h5>
                <p>Stores & Malls</p>
              </div>
            </div>
          </div>

          <div className={style.btnPortfolio}>
            <p>Explore all our works</p>
            <button>VIEW PORTFOLIO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
