import style from "./ourOffices.module.css";

const OurOffices = () => {
  return (
    <section className={style.bgSection}>
      <div className="container">
        <h2 className={style.h2}>Contact us</h2>
        <p className={style.p_main}>
          Please complete the form. Detailed information will help us to make a
          tuned offer.
        </p>

        <div className={style.rowBox}>
          <div className={style.box}>
            <h6>New York, USA</h6>

            <div className={style.adres}>
              <p>8502 Preston Rd. Inglewood, New York 98380</p>
              <a href="#">See on the map</a>
            </div>
            <div className={style.contactBox}>
              <div className={style.mesage}>
                <span>Call:</span>
                <a href="#">(405) 555-0128</a>
              </div>
              <div className={style.mesage}>
                <span>Email:</span>
                <a href="#">hello@createx.com</a>
              </div>
              <div className={style.mesage}>
                <span>Schedule:</span>
                <a href="#">Mon - Fri 9:00 - 18:00</a>
              </div>
            </div>
          </div>
          <div className={style.box}>
            <h6>New Jersey, USA</h6>

            <div className={style.adres}>
              <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
              <a href="#">See on the map</a>
            </div>
            <div className={style.contactBox}>
              <div className={style.mesage}>
                <span>Call:</span>
                <a href="#">(808) 555-0111</a>
              </div>
              <div className={style.mesage}>
                <span>Email:</span>
                <a href="#">hello@createx.com</a>
              </div>
              <div className={style.mesage}>
                <span>Schedule:</span>
                <a href="#">Mon - Fri 9:00 - 18:00</a>
              </div>
            </div>
          </div>
          <div className={style.box}>
            <h6>San Francisco, USA</h6>

            <div className={style.adres}>
              <p>8502 Preston Rd. Inglewood, San Francisco 98380</p>
              <a href="#">See on the map</a>
            </div>
            <div className={style.contactBox}>
              <div className={style.mesage}>
                <span>Call:</span>
                <a href="#">(505) 555-0125</a>
              </div>
              <div className={style.mesage}>
                <span>Email:</span>
                <a href="#">hello@createx.com</a>
              </div>
              <div className={style.mesage}>
                <span>Schedule:</span>
                <a href="#">Mon - Fri 10:00 - 19:00</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
