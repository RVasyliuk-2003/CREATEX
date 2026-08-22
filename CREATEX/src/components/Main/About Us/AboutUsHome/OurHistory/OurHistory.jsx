import style from "./ourHistory.module.css";
import { useState } from "react";
import mainHistorty from "./images/history.jpg";

import line1 from "./images/Line.svg";
import line2 from "./images/Line2.svg";

const OurHistory = () => {
  const [activeTab, setActiveTab] = useState("Present");
  const [activeBtnSlider, setActiveBtnSlider] = useState("next");

  return (
    <section className={style.backgroundSection}>
      <div className="container">
        <div className={style.mainHistoryContainer}>
          <div className={style.listContainer}>
            <h1>Our history</h1>

            <ul>
              <li>
                <button
                  className={
                    activeTab === "Present" ? style.isActive : style.tabBtn
                  }
                  onClick={() => setActiveTab("Present")}
                >
                  Present
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "March 2019" ? style.isActive : style.tabBtn
                  }
                  onClick={() => setActiveTab("March 2019")}
                >
                  March 2019
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "November 2018"
                      ? style.isActive
                      : style.tabBtn
                  }
                  onClick={() => setActiveTab("November 2018")}
                >
                  November 2018
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "July 2015" ? style.isActive : style.tabBtn
                  }
                  onClick={() => setActiveTab("July 2015")}
                >
                  July 2015
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "August 2010" ? style.isActive : style.tabBtn
                  }
                  onClick={() => setActiveTab("August 2010")}
                >
                  August 2010
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "February 2007"
                      ? style.isActive
                      : style.tabBtn
                  }
                  onClick={() => setActiveTab("February 2007")}
                >
                  February 2007
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "May 2004" ? style.isActive : style.tabBtn
                  }
                  onClick={() => setActiveTab("May 2004")}
                >
                  May 2004
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "October 2001" ? style.isActive : style.tabBtn
                  }
                  onClick={() => setActiveTab("October 2001")}
                >
                  October 2001
                </button>
              </li>
              <li>
                <button
                  className={
                    activeTab === "June 2000" ? style.isActive : style.tabBtn
                  }
                  onClick={() => setActiveTab("June 2000")}
                >
                  June 2000
                </button>
              </li>
            </ul>
          </div>

          <div className={style.ImgScrolContainer}>
            <div className={style.btnScrol}>
              <button
                onClick={() => setActiveBtnSlider("next")}
                className={`${style.btn} ${activeBtnSlider === "next" ? style.activeBtn : null}`}
              >
                <img src={line1} alt="line1" />
              </button>
              <button
                onClick={() => setActiveBtnSlider("prev")}
                className={`${style.btn} ${activeBtnSlider === "prev" ? style.activeBtn : null}`}
              >
                <img src={line2} alt="line2" />
              </button>
            </div>
            <div className={style.ImgScrolBox}>
              <img src={mainHistorty} alt="mainHistortyImg" />
            </div>

            <p>
              Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
              porttitor in. Eu nec vitae, malesuada vitae egestas integer et
              morbi. Maecenas sed quis diam posuere malesuada magnis.
              Bcelerisque dapibus. Eu nec vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
