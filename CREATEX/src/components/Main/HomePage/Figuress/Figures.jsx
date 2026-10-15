import { useEffect, useRef, useState } from "react";
import style from "./figeres.module.css";

import background from "./images/background.png";

const figuresData = [
  {
    value: 98,
    suffix: "%",
    label: "Totally satisfied clients",
    color: "#ff9826",
    progress: 98,
  },
  {
    value: 20,
    suffix: "",
    label: "Years of experience",
    color: "#ff2f70",
    progress: 98,
  },
  {
    value: 9452,
    suffix: "",
    label: "Working hours spent",
    color: "#5b83ff",
    progress: 98,
  },
  {
    value: 100,
    suffix: "%",
    label: "Succeeded projects",
    color: "#00c9a5",
    progress: 100,
  },
];

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Figures = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={style.overHidd}>
      <div className="container">
        <div className={style.facrsMainContainer}>
          <img className={style.backgroundImage} src={background} alt="" />

          <h2>Some facts and figures</h2>

          <div className={style.facrsBox}>
            {figuresData.map((figure, index) => (
              <div className={style.facts} key={figure.label}>
                <div className={style.circle}>
                  <svg
                    className={style.progressSvg}
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      className={style.circleTrack}
                      cx="50"
                      cy="50"
                      r={RADIUS}
                      stroke={figure.color}
                    />

                    <circle
                      className={`${style.circleProgress} ${
                        isVisible ? style.circleProgressActive : ""
                      }`}
                      cx="50"
                      cy="50"
                      r={RADIUS}
                      stroke={figure.color}
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={
                        CIRCUMFERENCE * (1 - figure.progress / 100)
                      }
                      style={{
                        transitionDelay: `${index * 150}ms`,
                      }}
                    />
                  </svg>

                  <span className={style.number}>
                    <Counter
                      target={figure.value}
                      isVisible={isVisible}
                      suffix={figure.suffix}
                    />
                  </span>
                </div>

                <p>{figure.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ target, isVisible, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const startTime = performance.now();
    let animationFrame;

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easedProgress = 1 - (1 - progress) ** 3;

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, isVisible]);

  return (
    <>
      {count.toLocaleString("en-US")}
      {suffix}
    </>
  );
};

export default Figures;
