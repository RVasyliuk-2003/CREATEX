import style from "./findUsAt.module.css";

import facebook from "./images/Facebook.png";
import messanger from "./images/Messanger.png";
import twitter from "./images/Twitter.png";
import whatsapp from "./images/Whatsapp.png";
import youTube from "./images/YouTube.png";

const FindUsAt = () => {
  return (
    <section className={style.bgSection}>
      <div className="container">
        <h2 className={style.h2}>Find us at</h2>
        <div className={style.messangeContainer}>
          <img src={whatsapp} alt="whatsapp" />
          <img src={messanger} alt="messanger" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={youTube} alt="youTube" />
        </div>
      </div>
    </section>
  );
};

export default FindUsAt;
