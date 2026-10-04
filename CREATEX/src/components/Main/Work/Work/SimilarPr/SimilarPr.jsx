import style from "./similarPr.module.css";

import image from "./images/image.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jfif";
import image5 from "./images/image5.jfif";
import image6 from "./images/image6.jfif";
import image7 from "./images/image7.jfif";

import Left from "./images/Line.svg";
import Right from "./images/Line2.svg";

import { useRef } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const SimilarPr = () => {
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [colorSliderBtn, setColorSliderBtn] = useState("next");
  return (
    <section>
      <div className="container">
        <div className={style.mainWorkContainer}>
          <div className={style.mainTextWorkContainer}>
            <h2>Similar projects</h2>
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
                <img src={image} alt="Building1" />
                <div>
                  <h5>Luxury Beach House</h5>
                  <p>Private Houses</p>
                </div>
                {hoveredIndex === 1 && (
                  <button className={style.hoverBtnSlide}>VIEW PROJECT</button>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(2)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={image2} alt="Building2" />
                <div>
                  <h5>Brown and Gray Painted House</h5>
                  <p>Private Houses</p>
                </div>
                {hoveredIndex === 2 && (
                  <button className={style.hoverBtnSlide}>VIEW PROJECT</button>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(3)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={image3} alt="Building3" />
                <div>
                  <h5>Scandinavian Style Interior</h5>
                  <p>Private houses</p>
                </div>
                {hoveredIndex === 3 && (
                  <button className={style.hoverBtnSlide}>VIEW PROJECT</button>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(4)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={image4} alt="Building4" />
                <div>
                  <h5>Kids Bedroom With Decorations</h5>
                  <p>Apartments & flats</p>
                </div>
                {hoveredIndex === 4 && (
                  <button className={style.hoverBtnSlide}>VIEW PROJECT</button>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(5)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={image5} alt="Building5" />
                <div>
                  <h5>Scandinavian Style Interior</h5>
                  <p>Private houses</p>
                </div>
                {hoveredIndex === 5 && (
                  <button className={style.hoverBtnSlide}>VIEW PROJECT</button>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(6)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={image6} alt="Building6" />
                <div>
                  <h5>Modern Double Bedroom</h5>
                  <p>Apartments & flats</p>
                </div>
                {hoveredIndex === 6 && (
                  <button className={style.hoverBtnSlide}>VIEW PROJECT</button>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onMouseEnter={() => setHoveredIndex(7)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={style.cartSlider}
              >
                <img src={image7} alt="Building7" />
                <div>
                  <h5>Modern Double Bedroom</h5>
                  <p>Apartments & flats</p>
                </div>
                {hoveredIndex === 7 && (
                  <button className={style.hoverBtnSlide}>VIEW PROJECT</button>
                )}
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={style.btnPortfolio}>
            <p>Explore all our works</p>
            <button>VIEW PORTFOLIO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarPr;
