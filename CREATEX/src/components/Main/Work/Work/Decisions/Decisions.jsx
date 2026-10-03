import style from "./decisions.module.css";
import mainImg from "./images/main.jpg";
import check from "./images/check.svg";

const Decisions = () => {
  return (
    <section className={style.bgColor}>
      <div className="container">
        <div className={style.decisionsContainer}>
          <img className={style.decisionsImage} src={mainImg} alt="mainImg" />
          <div>
            <h2 className={style.h2_decisions}>Constructive decisions</h2>

            <div className={style.decisionsInfoBox}>
              <div className={style.checkBox}>
                <img src={check} alt="check" />
                <span>
                  Vitae ultrices ornare eu sed in est quisque duis id.
                </span>
              </div>
              <div className={style.checkBox}>
                <img src={check} alt="check" />
                <span>
                  A fermentum in morbi pretium aliquam adipiscing donec tempus.
                </span>
              </div>
              <div className={style.checkBox}>
                <img src={check} alt="check" />
                <span>Mauris odio pellentesque commodo, diam.</span>
              </div>
              <div className={style.checkBox}>
                <img src={check} alt="check" />
                <span>
                  Fermentum vestibulum est fermentum, egestas gravida
                  scelerisque quis.
                </span>
              </div>
              <div className={style.checkBox}>
                <img src={check} alt="check" />
                <span>
                  At pharetra libero blandit risus, fringilla sed commodo diam.
                </span>
              </div>
              <div className={style.checkBox}>
                <img src={check} alt="check" />
                <span>Integer ultricies viverra ut enim viverra ut.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decisions;
