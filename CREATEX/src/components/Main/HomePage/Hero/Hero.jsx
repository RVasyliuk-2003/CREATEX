import { useState } from "react";
import style from "./hero.module.css";

import line from "./images/Line.svg";
import line2 from "./images/Line2.svg";

import { Link } from "react-router-dom";

import { slidesData } from "./slidesData";

const Hero = ({ setRequestMdl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slidesData[currentIndex];

  return (
    <section
      className={`containerForImgBacground ${style.heroBg} ${currentIndex !== 0 ? style.darkOverlay : ""}`}
      style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
    >
      <div className={style.LineBtnForSlider}>
        <button onClick={handlePrev} aria-label="Previous slide">
          <img src={line} alt="line" />
        </button>
        <button onClick={handleNext} aria-label="Next slide">
          <img src={line2} alt="line2" />
        </button>
      </div>

      <div className="container">
        <div className={style.mainContainer}>
          <h1>{currentSlide.title}</h1>
          <p>{currentSlide.description}</p>

          <div className={style.btnBox}>
            <Link className={style.btnLEARN} to="/AboutUsHome">
              LEARN MORE ABOUT US
            </Link>
            <button
              onClick={() => setRequestMdl(true)}
              className={style.btnSUBMIT}
            >
              SUBMIT REQUEST
            </button>
          </div>

          <div className={style.switchContainer}>
            {slidesData.map((slide, index) => (
              <div
                key={slide.id}
                className={`${style.switch} ${
                  index === currentIndex ? style.activeSwitch : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <p>{slide.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
