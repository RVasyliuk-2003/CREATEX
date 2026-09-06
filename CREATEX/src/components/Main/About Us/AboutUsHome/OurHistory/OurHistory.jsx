import style from "./ourHistory.module.css";
import { useState } from "react";

// *** ІМПОРТ SWIPER ***
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import line1 from "./images/Line.svg";
import line2 from "./images/Line2.svg";

import mainHistorty from "./images/Present/history.jpg";
import mainHistorty2 from "./images/Present/images1.jfif";
import mainHistorty3 from "./images/Present/images3.jfif";

import images01 from "./images/August2010/images.jfif";

import images11 from "./images/July2015/images3.jfif";
import images12 from "./images/July2015/images8.jfif";

import images22 from "./images/June2000/images6.jfif";
import images23 from "./images/June2000/images9.jfif";

import images33 from "./images/March2019/images4.jfif";
import images34 from "./images/March2019/images10.jfif";

import images44 from "./images/May2004/images5.jfif";
import images45 from "./images/May2004/images11.jfif";

import images55 from "./images/November2018/images2.jfif";

import images66 from "./images/October2001/images0.jfif";
import images67 from "./images/October2001/images7.jfif";

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
                className={`history-next-btn ${style.btn} ${activeBtnSlider === "next" ? style.activeBtn : ""}`}
              >
                <img src={line1} alt="line1" />
              </button>
              <button
                onClick={() => setActiveBtnSlider("prev")}
                className={`history-prev-btn ${style.btn} ${activeBtnSlider === "prev" ? style.activeBtn : ""}`}
              >
                <img src={line2} alt="line2" />
              </button>
            </div>

            <div
              className={
                activeTab === "Present" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={mainHistorty} alt="mainHistortyImg" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={mainHistorty2} alt="mainHistorty2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={mainHistorty3} alt="mainHistorty3" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "March 2019" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images01} alt="images01" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "November 2018" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images11} alt="images11" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images12} alt="images12" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "July 2015" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images22} alt="images22" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images23} alt="images23" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "August 2010" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images33} alt="images33" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images34} alt="images34" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "February 2007" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images44} alt="images44" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images45} alt="images45" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "May 2004" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images55} alt="images55" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "October 2001" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images66} alt="images66" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={images67} alt="images67" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <p>
                Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
                porttitor in. Eu nec vitae, malesuada vitae egestas integer et
                morbi. Maecenas sed quis diam posuere malesuada magnis.
                Bcelerisque dapibus. Eu nec vitae.
              </p>
            </div>

            <div
              className={
                activeTab === "June 2000" ? style.active : style.nonActive
              }
            >
              <div className={style.ImgScrolBox}>
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".history-next-btn",
                    prevEl: ".history-prev-btn",
                  }}
                  slidesPerView={1}
                >
                  <SwiperSlide>
                    <img src={images23} alt="images23" />
                  </SwiperSlide>
                </Swiper>
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
      </div>
    </section>
  );
};

export default OurHistory;
