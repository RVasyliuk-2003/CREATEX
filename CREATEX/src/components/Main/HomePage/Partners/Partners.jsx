import style from "./partners.module.css";

import partner1 from "./images/partner1.png";
import partner2 from "./images/partner2.png";
import partner3 from "./images/partner3.png";
import partner4 from "./images/partner4.png";
import partner5 from "./images/partner5.png";
import partner6 from "./images/partner6.png";

import Line from "./images/Line.svg";
import Line2 from "./images/Line2.svg";

import frend from "./images/frend.jpg";
import people from "./images/people.jpg";

const Partners = () => {
  return (
    <section className={style.sectionColor}>
      <div className="container">
        <div className={style.mainContainerPartners}>
          <div className={style.partnersBox}>
            <h2>Supported by 12+ partners</h2>
            <div className={style.partnersImgBox}>
              <img src={partner1} alt="partner1" />
              <img src={partner2} alt="partner2" />
              <img src={partner3} alt="partner3" />
              <img src={partner4} alt="partner4" />
              <img src={partner5} alt="partner5" />
              <img src={partner6} alt="partner6" />
            </div>
          </div>

          <div className={style.mainClientsContainer}>
            <div className={style.leftClientBox}>
              <h2>What our clients are saying</h2>

              <div className={style.peopleBox}>
                <img src={people} alt="people" />
                <p>
                  Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
                  eiusmod enim. <br /> Consectetur magna cillum consequat minim
                  laboris cillum laboris voluptate minim <br /> proident
                  exercitation ullamco.
                </p>
                <div className={style.peopleBoxSlider}>
                  <div className={style.peopleBoxText}>
                    <span>Shawn Edwards</span>
                    <p>Position, Company name</p>
                  </div>
                  <div className={style.peopleBoxBtnSlider}>
                    <button>
                      <img src={Line} alt="Line" />
                    </button>
                    <button>
                      <img src={Line2} alt="Line2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img className={style.rightClientImg} src={frend} alt="frend" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
