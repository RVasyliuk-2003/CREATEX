import style from "./ourCity.module.css";

import clock from "./images/Clock.svg";
import outline from "./images/outline.svg";

const OurCity = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <div className={style.leftBoxCity}>
            <div className={style.offiseCityContainer}>
              <div>
                <p className={style.svgInfoBox}>
                  <img src={outline} alt="outline" />
                  New York | Full Time
                  <img src={clock} alt="clock" />
                </p>
                <h4>Heavy Equipment Operator</h4>
              </div>
              <button className={style.btnApply}>APPLY NOW</button>
            </div>

            <div className={style.offiseCityContainer}>
              <div>
                <p className={style.svgInfoBox}>
                  <img src={outline} alt="outline" />
                  San Francisco | Full Time
                  <img src={clock} alt="clock" />
                </p>
                <h4>Financial Compliance Analyst</h4>
              </div>
              <button className={style.btnApply}>APPLY NOW</button>
            </div>
            <div className={style.offiseCityContainer}>
              <div>
                <p className={style.svgInfoBox}>
                  <img src={outline} alt="outline" />
                  New Jersey | Full Time
                  <img src={clock} alt="clock" />
                </p>
                <h4>Project Manager - Buildings</h4>
              </div>
              <button className={style.btnApply}>APPLY NOW</button>
            </div>
            <div className={style.offiseCityContainer}>
              <div>
                <p className={style.svgInfoBox}>
                  <img src={outline} alt="outline" />
                  New York | Part Time
                  <img src={clock} alt="clock" />
                </p>
                <h4>Environment Specialist</h4>
              </div>
              <button className={style.btnApply}>APPLY NOW</button>
            </div>
            <div className={style.offiseCityContainer}>
              <div>
                <p className={style.svgInfoBox}>
                  <img src={outline} alt="outline" />
                  New York | Full Time
                  <img src={clock} alt="clock" />
                </p>
                <h4>Accountant</h4>
              </div>
              <button className={style.btnApply}>APPLY NOW</button>
            </div>
          </div>
          <div className={style.rightBoxSend}>
            <h3>Didn’t find what you were looking for?</h3>
            <p>
              Send your CV or subscribe to our newsletter to receive information
              about new vacancies.
            </p>

            <div className={style.btnRibgtBox}>
              <button className={style.btnSUBSCRIBE}>SUBSCRIBE</button>
              <button className={style.btnSENDCv}>SEND CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCity;
