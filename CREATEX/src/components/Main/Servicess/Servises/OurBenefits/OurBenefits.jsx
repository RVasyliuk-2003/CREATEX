import style from "./ourBenefits.module.css";

import camera from "./images/ic-camera.svg";
import contract from "./images/ic-contract.svg";
import helmet from "./images/ic-helmet.svg";

const OurBenefits = () => {
  return (
    <section className={style.bgColor}>
      <div className="container">
        <div className={style.mainBox}>
          <h2>Our benefits</h2>
          <p>
            Our mission is to set the highest standards for construction sphere.
          </p>
          <div className={style.mainCoreBox}>
            <div className={style.coreBox}>
              <img src={contract} alt="hand" />
              <h5>Fixed Terms & Cost</h5>
              <p>
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
            <div className={style.coreBox}>
              <img src={helmet} alt="like" />
              <h5>Qualified Workers</h5>
              <p>
                Anim reprehenderit sint voluptate exercitation adipisicing
                laborum adipisicing. Minim empor est ea.
              </p>
            </div>
            <div className={style.coreBox}>
              <img src={camera} alt="slippers" />
              <h5>Supervision & Control</h5>
              <p>
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                voluptate ullamco proident ea ad.
              </p>
            </div>
          </div>
        </div>
        <button className={style.discussBTN}>DISCUSS A PROJECT</button>
      </div>
    </section>
  );
};

export default OurBenefits;
