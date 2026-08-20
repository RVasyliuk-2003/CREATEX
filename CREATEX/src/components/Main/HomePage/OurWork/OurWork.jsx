import style from "./ourWork.module.css";

import Left from "./images/Line.svg";
import Right from "./images/Line2.svg";

import Building1 from "./images/image.png";
import Building2 from "./images/image2.png";
import Building3 from "./images/image3.jpg";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const OurWork = () => {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="container">
        <div className={style.mainWorkContainer}>
          <div className={style.mainTextWorkContainer}>
            <h2>
              Browse our selected projects <br /> and learn more about our work
            </h2>
            <div className={style.mainTextBtnSliderBox}>
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img src={Left} alt="Left" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
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
              <div className={style.cartSlider}>
                <img src={Building1} alt="Building1" />
                <div>
                  <h5>Red Finger Building</h5>
                  <p>Business Centers</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.cartSlider}>
                <img src={Building2} alt="Building2" />
                <div>
                  <h5>Cubes Building</h5>
                  <p>Business Centers</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={style.cartSlider}>
                <img src={Building3} alt="Building3" />
                <div>
                  <h5>The Pencil Building</h5>
                  <p>Stores & Malls</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cartSlider}>
                <img src={Building3} alt="Building3" />
                <div>
                  <h5>The Pencil Building</h5>
                  <p>Stores & Malls</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.cartSlider}>
                <img src={Building3} alt="Building3" />
                <div>
                  <h5>The Pencil Building</h5>
                  <p>Stores & Malls</p>
                </div>
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

export default OurWork;
