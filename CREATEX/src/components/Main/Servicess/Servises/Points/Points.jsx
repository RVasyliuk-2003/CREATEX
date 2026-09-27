import style from "./points.module.css";

const Points = () => {
  return (
    <section>
      <div className="container">
        <h4 className={style.mainH4Points}>That’s how we do it</h4>
        <div className={style.ourPointsBox}>
          <div className={style.points}>
            <b>01</b>
            <div className={style.line}></div>
            <span>Work Estimate</span>
            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit.</p>
          </div>

          <div className={style.points}>
            <b>02</b>
            <div className={style.line}></div>
            <span>Contract</span>
            <p>
              Laoreet ultrices curabitur luctus quisque consequat. Leo lorem
              velit imperdiet auctor et tempor.
            </p>
          </div>
          <div className={style.points}>
            <b>03</b>
            <div className={style.line}></div>
            <span>Mobilization </span>
            <p>
              Odio massa scelerisque purus arcu sed velit eleifend cursus leo.
            </p>
          </div>
          <div className={style.points}>
            <b>04</b>
            <span>Construction Work</span>
            <p>
              Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
              dolore et ad et veniam ad deserunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Points;
