import style from "./director.module.css";

import braces from "./images/braces.svg";
import man from "./images/man.jpg";
import signature from "./images/signature.svg";
import absolute from "./images/absolute.png";

import icHelmet from "./images/icHelmet.svg";
import icLike from "./images/icLike.svg";
import icPainting from "./images/icPainting.svg";
import icPantone from "./images/icPantone.svg";

const Director = () => {
  return (
    <section className={style.positionSection}>
      <div className="container">
        <div className={style.flexContainer}>
          <div className={style.perfectBox}>
            <div className={style.perfect}>
              <img src={icLike} alt="icLike" />
              <b>60%</b>
              <span>
                Clients on the recommendation <br /> of friends
              </span>
            </div>
            <div className={style.perfect}>
              <img src={icPainting} alt="icPainting" />
              <b>2400+</b>
              <span>Apartments renovated</span>
            </div>
            <div className={style.perfect}>
              <img src={icHelmet} alt="icHelmet" />
              <b>670</b>
              <span>Qualified specialists</span>
            </div>
            <div className={style.perfect}>
              <img src={icPantone} alt="icPantone" />
              <b>150000+ m2</b>
              <span>Finishing work was carried out</span>
            </div>
          </div>

          {/* Lower block */}

          <div className={style.directorBox}>
            <img className={style.manImg} src={man} alt="man" />

            <div className={style.textContainer}>
              <img className={style.bracesImg} src={braces} alt="braces" />
              <p>
                Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue
                in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet
                sagittis non, massa cum pulvinar. Et in leo, tempus purus
                vestibulum ut blandit et mi. Odio massa purus vel praesent arcu
                enim elit felis viverra.
              </p>

              <p className={style.textP2}>
                Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra
                quis metus amet eleifend amet. Vet suspendisse faucibus tempor
                ipsum integer.
              </p>

              <div className={style.signatureContainer}>
                <div className={style.signaturetextName}>
                  <p>Courtney Alexander</p>
                  <span>CEO - Createx Construction Bureau </span>
                </div>
                <img src={signature} alt="signature" />
              </div>
            </div>
          </div>
        </div>
        <img
          className={style.absoluteBgImg}
          src={absolute}
          alt="absoluteBgImg"
        />
      </div>
    </section>
  );
};

export default Director;
