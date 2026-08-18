import style from "./ourHistory.module.css";

import mainHistorty from "./images/history.jpg";

const OurHistory = () => {
  return (
    <section className={style.backgroundSection}>
      <div className="container">
        <div className={style.mainHistoryContainer}>
          <div className={style.listContainer}>
            <h1>Our history</h1>

            <ul>
              <li>
                <a href="">Present</a>
              </li>
              <li>
                <a href="">March 2019</a>
              </li>
              <li>
                <a href="">November 2018</a>
              </li>
              <li>
                <a href="">July 2015</a>
              </li>
              <li>
                <a href="">August 2010</a>
              </li>
              <li>
                <a href="">February 2007</a>
              </li>
              <li>
                <a href="">May 2004</a>
              </li>
              <li>
                <a href="">October 2001</a>
              </li>
              <li>
                <a href="">June 2000</a>
              </li>
            </ul>
          </div>

          <div className={style.ImgScrolContainer}>
            <div className={style.btnScrol}>
              <div className={style.btn}>
                <img src="" alt="" />
              </div>
              <div className={style.btn}>
                <img src="" alt="" />
              </div>
            </div>
            <div className={style.ImgScrolBox}>
              <img src={mainHistorty} alt="mainHistortyImg" />
            </div>

            <p>
              Bcelerisque dapibus pharetra nibh semper iaculis duis viverra
              porttitor in. Eu nec vitae, malesuada vitae egestas integer et
              morbi. Maecenas sed quis diam posuere malesuada magnis.
              Bcelerisque dapibus. Eu nec vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
