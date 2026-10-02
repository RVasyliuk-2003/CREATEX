import style from "./supportedPr.module.css";

import partner1 from "./../../../HomePage/Partners/images/partner1.png";
import partner2 from "./../../../HomePage/Partners/images/partner2.png";
import partner3 from "./../../../HomePage/Partners/images/partner3.png";
import partner4 from "./../../../HomePage/Partners/images/partner4.png";
import partner5 from "./../../../HomePage/Partners/images/partner5.png";
import partner6 from "./../../../HomePage/Partners/images/partner6.png";

const SupportedPr = () => {
  return (
    <section className={style.bg_color}>
      <div className="container">
        <h2 className={style.h2Partners}>Supported by 12+ partners</h2>

        <div className={style.partnerBox}>
          <img src={partner1} alt="partner" />
          <img src={partner2} alt="partner" />
          <img src={partner3} alt="partner" />
          <img src={partner4} alt="partner" />
          <img src={partner5} alt="partner" />
          <img src={partner6} alt="partner" />
        </div>
      </div>
    </section>
  );
};

export default SupportedPr;
