import style from "./ourServices.module.css";

import construction from "./images/ic-construction.svg";
import painting from "./images/ic-painting.svg";
import pantone from "./images/ic-pantone.svg";
import plan from "./images/ic-plan.svg";

const OurServices = () => {
  return (
    <section className={`containerForImgBacground ${style.imgUrl}`}>
      <div className="container">
        <div className={style.mainBoxServices}>
          <h2>Our services</h2>
          <p>
            Createx Construction Bureau is a construction giant with a full
            range of construction services.
          </p>
          <div className={style.serviContainer}>
            <div className={style.serviBox}>
              <img src={construction} alt="construction" />
              <p>Construction</p>
            </div>
            <div className={style.serviBox}>
              <img src={plan} alt="plan" />
              <p>Project Development</p>
            </div>
            <div className={style.serviBox}>
              <img src={construction} alt="pantone" />
              <p>Interior Design</p>
            </div>
            <div className={style.serviBox}>
              <img src={painting} alt="painting" />
              <p>Repairs</p>
            </div>
          </div>
          <div className={style.btnServiBox}>
            <p>Learn more about our services</p>
            <button>VIEW SERVICES</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
