import style from "./ourClients.module.css";

import partner from "./images/partner.jpg";
import avatar from "./images/avatar.jpg";
import lineLeft from "./images/Line.svg";
import lineRight from "./images/Line2.svg";

const OurClients = () => {
  return (
    <section className={style.bgSection}>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={style.infoContainer}>
            <h4>What our clients are saying</h4>

            <img className={style.avatarImage} src={avatar} alt="avatar" />
            <p>
              Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
              eiusmod enim. Consectetur magna cillum consequat minim laboris
              cillum laboris voluptate minim proident exercitation ullamco.
            </p>

            <div className={style.nameBox}>
              <div className={style.nameText}>
                <b>Shawn Edwards</b>
                <p>Position, Company name</p>
              </div>
              <div className={style.lineBox}>
                <img src={lineLeft} alt="lineLeft" />
                <img src={lineRight} alt="lineRight" />
              </div>
            </div>
          </div>
          <img className={style.mainImage} src={partner} alt="partner" />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
