import style from "./Benefits.module.css";
import img1 from "./images/icBrain.svg";
import img2 from "./images/icBudget.svg";
import img3 from "./images/icSuccess.svg";

const Benefits = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainBox}>
          <h2>Employee benefits</h2>
          <p>There’s always room for talent.</p>

          <div className={style.mainCoreBox}>
            <div className={style.coreBox}>
              <img src={img1} alt="img1" />
              <h5>Training</h5>
              <p>
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
            <div className={style.coreBox}>
              <img src={img2} alt="img2" />
              <h5>Professional Growth</h5>
              <p>
                Anim reprehenderit sint voluptate exercitation adipisicing
                laborum adipisicing. Minim empor est ea.
              </p>
            </div>
            <div className={style.coreBox}>
              <img src={img3} alt="img3" />
              <h5>Growing Salary</h5>
              <p>
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                voluptate ullamco proident ea ad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
