import style from "./ourPartners.module.css";

import part1 from "./images/part1.png";
import part2 from "./images/part2.png";
import part3 from "./images/part3.png";
import part4 from "./images/part4.png";
import part5 from "./images/part5.png";
import part6 from "./images/part6.png";
import part7 from "./images/part7.png";
import part8 from "./images/part8.png";
import part9 from "./images/part9.png";
import part10 from "./images/part10.png";
import part11 from "./images/part11.png";
import part12 from "./images/part12.png";

const OurPartners = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <h1>Our partners</h1>
          <p>We are supported by 12+ industry bodies and media partners</p>
          <div>
            <div className={style.imgBox}>
              <img src={part10} alt="part10" />
              <img src={part9} alt="part9" />
              <img src={part12} alt="part12" />
              <img src={part11} alt="part11" />
              <img src={part8} alt="part8" />
              <img src={part7} alt="part7" />
            </div>
            <div className={style.imgBox}>
              <img src={part1} alt="part1" />
              <img src={part2} alt="part2" />
              <img src={part3} alt="part3" />
              <img src={part4} alt="part4" />
              <img src={part5} alt="part5" />
              <img src={part6} alt="part6" />/
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
