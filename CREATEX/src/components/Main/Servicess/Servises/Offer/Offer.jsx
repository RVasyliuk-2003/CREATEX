import style from "./offer.module.css";

import image from "./images/image.png";
import minus from "./images/Minus.svg";
import plus from "./images/Plus.svg";

const Offer = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <img className={style.mainImgOffer} src={image} alt="image" />

          <div className={style.containerInfo}>
            <h4 className={style.h4Offer}>We offer</h4>
            <div className={style.privateAndApart}>
              <img src={minus} alt="minus" />
              <span>
                Interior design of <br /> apartments
              </span>
            </div>
            <p>
              Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
              elementum faucibus dignissim purus. Fusce parturient diam magna
              ullamcorper morbi semper massa ac facilisis.
            </p>
            <div className={style.privateAndApart}>
              <img src={plus} alt="plus" />
              <span>
                Interior design of private <br /> houses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
