import style from "./ourTeam.module.css";

import team1 from "./images/team1.jpg";
import team2 from "./images/team2.jpg";
import team3 from "./images/team3.jpg";
import team4 from "./images/team4.jpg";
import team5 from "./images/team5.jpg";
import team6 from "./images/team6.jpg";
import team7 from "./images/team7.jpg";
import team8 from "./images/team8.jpg";

const OurTeam = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <h1>Our team</h1>
          <p>People are at the heart of Createx Construction Bureau </p>

          <div className={style.teamsMainBox}>
            <div className={style.teamCard}>
              <img src={team8} alt="team8" />
              <div className={style.teamCardText}>
                <h5>Courtney Alexander</h5>
                <span>CEO, Co-Founder</span>
              </div>
            </div>

            <div className={style.teamCard}>
              <img src={team7} alt="team7" />
              <div className={style.teamCardText}>
                <h5>Calvin Fox</h5>
                <span>CTO, Co-Founder</span>
              </div>
            </div>
            <div className={style.teamCard}>
              <img src={team6} alt="team6" />
              <div className={style.teamCardText}>
                <h5>Johnny Lane</h5>
                <span>Commercial Manager</span>
              </div>
            </div>
            <div className={style.teamCard}>
              <img src={team5} alt="team5" />
              <div className={style.teamCardText}>
                <h5>Diane Mccoy</h5>
                <span>Director of Human Resources</span>
              </div>
            </div>
            <div className={style.teamCard}>
              <img src={team4} alt="team4" />
              <div className={style.teamCardText}>
                <h5>Judith Warren</h5>
                <span>Lead Accountant</span>
              </div>
            </div>
            <div className={style.teamCard}>
              <img src={team3} alt="team3" />
              <div className={style.teamCardText}>
                <h5>Floyd Simmmons</h5>
                <span>Finacial Director</span>
              </div>
            </div>
            <div className={style.teamCard}>
              <img src={team2} alt="team2" />
              <div className={style.teamCardText}>
                <h5>Serenity Edwards</h5>
                <span>Director of Marketing</span>
              </div>
            </div>
            <div className={style.teamCard}>
              <img src={team1} alt="team1" />
              <div className={style.teamCardText}>
                <h5>Shawn Edwards</h5>
                <span>Tech Lead</span>
              </div>
            </div>
          </div>

          <div className={style.availableLinkBox}>
            <p>
              Become a part of the best team in the construction market of the
              USA. <a href="#">Available Positions</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
