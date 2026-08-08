import style from "./homeVideo.module.css";
import imgVideo from "./image/images.jfif";
import btnPlay from "./image/Polygon.svg";
import off from "./image/off.svg";

const HomeVideo = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <h2>We are Createx Construction Bureau </h2>
          <p>
            We are rightfully considered to be the best construction company in
            the USA.
          </p>

          <div className={style.mainVideoBox}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/wsyuuD4iAB4?si=7hdl5rRNUStbV0Uu"
              className={style.btnPlay}
            >
              <img src={btnPlay} alt="btn" />
            </a>

            <button className={style.svg2}>
              <img src={off} alt="img" />
            </button>

            <img src={imgVideo} alt="mainVideo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
