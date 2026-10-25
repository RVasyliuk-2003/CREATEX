import style from "./ourWork.module.css";

import { Link } from "react-router-dom";

import Left from "./images/Line.svg";
import Right from "./images/Line2.svg";

import Building1 from "./images/image.png";
import Building2 from "./images/image2.png";
import Building3 from "./images/image3.jpg";
import Building4 from "./images/images4.jfif";
import Building5 from "./images/images5.jfif";
import Building6 from "./images/images6.jfif";
import Building7 from "./images/images7.jfif";

import { useRef } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const OurWork = () => {
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [colorSliderBtn, setColorSliderBtn] = useState("next");

  return (
    <section>
      <div className="container">
        <div className={style.mainWorkContainer}>
          <div className={style.mainTextWorkContainer}>
            <h2>
              Browse our selected projects <br /> and learn more about our work
            </h2>
            <div className={style.mainTextBtnSliderBox}>
              <button
                className={colorSliderBtn === "next" ? style.isActiveBtn : null}
                onClick={() => {
                  swiperRef.current?.slidePrev();
                  setColorSliderBtn("next");
                }}
              >
                <img src={Left} alt="Left" />
              </button>
              <button
                className={colorSliderBtn === "prev" ? style.isActiveBtn : null}
                onClick={() => {
                  swiperRef.current?.slideNext();
                  setColorSliderBtn("prev");
                }}
              >
                <img src={Right} alt="Right" />
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            className={style.mainCartSliderBox}
          >
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={Building1} alt="Building1" />
                <div>
                  <h5>Red Finger Building</h5>
                  <p>Business Centers</p>
                </div>
                {hoveredIndex === 1 && (
                  <Link to="/WorkHome" className={style.hoverBtnSlide}>
                    VIEW PROJECT
                  </Link>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={Building2} alt="Building2" />
                <div>
                  <h5>Cubes Building</h5>
                  <p>Business Centers</p>
                </div>
                {hoveredIndex === 2 && (
                  <Link to="/WorkHome" className={style.hoverBtnSlide}>
                    VIEW PROJECT
                  </Link>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={Building3} alt="Building3" />
                <div>
                  <h5>The Pencil Building</h5>
                  <p>Stores & Malls</p>
                </div>
                {hoveredIndex === 3 && (
                  <Link to="/WorkHome" className={style.hoverBtnSlide}>
                    VIEW PROJECT
                  </Link>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(4)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={Building4} alt="Building4" />
                <div>
                  <h5>Red Finger Building</h5>
                  <p>Business Centers</p>
                </div>
                {hoveredIndex === 4 && (
                  <Link to="/WorkHome" className={style.hoverBtnSlide}>
                    VIEW PROJECT
                  </Link>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(5)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={Building5} alt="Building5" />
                <div>
                  <h5>Cubes Building</h5>
                  <p>Stores & Malls</p>
                </div>
                {hoveredIndex === 5 && (
                  <Link to="/WorkHome" className={style.hoverBtnSlide}>
                    VIEW PROJECT
                  </Link>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(6)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={Building6} alt="Building6" />
                <div>
                  <h5>The Pencil Building</h5>
                  <p>Stores & Malls</p>
                </div>
                {hoveredIndex === 6 && (
                  <Link to="/WorkHome" className={style.hoverBtnSlide}>
                    VIEW PROJECT
                  </Link>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(7)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={Building7} alt="Building7" />
                <div>
                  <h5>Red Finger Building</h5>
                  <p>Stores & Malls</p>
                </div>
                {hoveredIndex === 7 && (
                  <Link className={style.hoverBtnSlide}>VIEW PROJECT</Link>
                )}
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={style.btnPortfolio}>
            <p>Explore all our works</p>
            <Link to="/WorkHome" className={style.btnVIEW}>
              VIEW PORTFOLIO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
