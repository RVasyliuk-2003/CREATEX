import style from "./ourValues.module.css";

import hand from "./images/ic-hand.svg";
import like from "./images/ic-like.svg";
import slippers from "./images/ic-slippers.svg";

const OurValues = () => {
  return (
    <section className={style.backgroundSection}>
      <div className="container">
        <div className={style.mainBox}>
          <h2>Our core values</h2>
          <p>
            Our mission is to set the highest standards for construction sphere.
          </p>
          <div className={style.mainCoreBox}>
            <div className={style.coreBox}>
              <img src={hand} alt="hand" />
              <h5>Quality</h5>
              <p>
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
            <div className={style.coreBox}>
              <img src={like} alt="like" />
              <h5>Quality</h5>
              <p>
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
            <div className={style.coreBox}>
              <img src={slippers} alt="slippers" />
              <h5>Quality</h5>
              <p>
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
