import style from "./news.module.css";

import circle0 from "./images/circleProgress.png";
import circle1 from "./images/circle-progress1.png";
import circle2 from "./images/circle-progress2.png";
import circle3 from "./images/circle-progress3.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

import background from "./images/background.png";

const News = () => {
  return (
    <section>
      <div className="container">
        <div className={style.facrsMainContainer}>
          <img
            className={style.backgroundImage}
            src={background}
            alt="background"
          />
          <h2>Some facts and figures</h2>
          <div className={style.facrsBox}>
            <div className={style.facts}>
              <img src={circle0} alt="circle0" />
              <p>Totally satisfied clients</p>
            </div>
            <div className={style.facts}>
              <img src={circle1} alt="circle1" />
              <p>Years of experience</p>
            </div>
            <div className={style.facts}>
              <img src={circle2} alt="circle2" />
              <p>Working hours spent</p>
            </div>
            <div className={style.facts}>
              <img src={circle3} alt="circle3" />
              <p>Succeeded projects</p>
            </div>
          </div>
        </div>

        <div className={style.newsMainContainer}>
          <h2>Recent news</h2>

          <div className={style.newsMainBox}>
            <div className={style.newsBox}>
              <img src={img1} alt="img1" />
              <div className={`padd ${style.textNewsBox}`}>
                <h6>How to Build Climate Change-Resilient Infrastructure</h6>
                <span>Industry News | June 24, 2020 | 4 comments</span>
                <p>How to Build Climate Change-Resilient Infrastructures</p>
              </div>
            </div>

            <div className={style.newsRightContainer}>
              <div className={style.newsBox}>
                <img src={img3} alt="img3" />
                <div className={style.textNewsBox}>
                  <h6>How Construction Can Help Itself</h6>
                  <span>Innovation | June 12, 2020 | No comments</span>
                </div>
              </div>
              <div className={style.newsBox}>
                <img src={img2} alt="img2" />
                <div className={style.textNewsBox}>
                  <h6>Types of Flooring Materials</h6>
                  <span>Company | News December 1, 2019 | No comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.viewPostBox}>
            <h5>Explore all our news posts</h5>
            <button>VIEW ALL NEWS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
