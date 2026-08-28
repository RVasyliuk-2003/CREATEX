import style from "./availableMain.module.css";
import mainImg from "./images/main.png";
import { Link } from "react-router-dom";

const AvailableMain = () => {
  return (
    <section className={style.sectionBoxForImg}>
      <div className="container">
        <div className={style.mainContainer}>
          <Link to="/">Homepage</Link>
          <Link to="about-us"> / About Us</Link>
          <Link to=""> / Available Positions</Link>
          <h1>
            AVAILABLE <br /> POSITIONS
          </h1>
          <p>Build your career with Createx Construction Bureau.</p>
        </div>
      </div>
      <img className={style.mainImg} src={mainImg} alt="mainImg" />
    </section>
  );
};

export default AvailableMain;
