import style from "./howNews.module.css";
import { NavLink, useParams } from "react-router-dom";

import { newsData } from "../../NewsHome/Categories/category.js";

import facebook from "./images/Facebook.svg";
import linked from "./images/Linked-In.svg";
import twitter from "./images/Twitter.svg";
import check from "./images/check.svg";
import braces from "./images/braces.svg";

const HowNews = () => {
  const { id } = useParams();

  const currentNews = newsData.find((ell) => ell.id === Number(id));

  return (
    <section>
      <div className={style.bacgroundColor}>
        <div className="container">
          <div className={style.linkBox}>
            <NavLink
              className={({ isActive }) => isActive && style.active}
              to="/"
            >
              Homepage
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && style.active}
              to="/NewsHome"
            >
              / News
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && style.active}
              to="/News"
            >
              / {currentNews?.title}
            </NavLink>
          </div>

          <h1 className={style.h1_howNews}>{currentNews?.title}</h1>

          <div className={style.dataBox}>
            <p>
              {currentNews.category} | {currentNews.date} |{" "}
              {currentNews.comments.length > 0
                ? currentNews.comments.length
                : "No comments"}
              comments
            </p>

            <div className={style.contactImg}>
              <img src={facebook} alt="facebook" />
              <img src={linked} alt="linked" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </div>

      <img
        className={style.mainImg}
        src={currentNews.image}
        alt={currentNews.category}
      />

      <div className={style.InfoBlogContainer}>
        <p className={style.p_excerpt}>{currentNews.excerpt}</p>

        <div className={style.box_intro}>
          <img src={braces} alt="braces" />
          <p className={style.p_intro}>{currentNews.content.intro}</p>
        </div>

        <p className={style.p_body}>{currentNews.content.body[0]}</p>
        <p className={style.p_body}>{currentNews.content.body[1]}</p>
        <div className={style.box_quote}>
          <img className={style.img_quote} src="" alt="" />
          <p className={style.p_quote}>{currentNews.content.quote}</p>
        </div>

        {currentNews.content.checklist.map((ell, id) => (
          <div className={style.checkBox} key={id}>
            <img src={check} alt="check" />
            <p className={style.p_checklist}>{ell}</p>
          </div>
        ))}

        <p className={style.p_outro}>{currentNews.content.outro}</p>

        <div className={style.messageBox}>
          <span>Share:</span>
          <div className={style.contactImg}>
            <img src={facebook} alt="facebook" />
            <img src={linked} alt="linked" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>

        <div className={style.commentContainer}>
          <h2>{currentNews.comments.length} comments</h2>

          {currentNews.comments.map((ell) => (
            <div className={style.boxComment} key={ell.id}>
              <div className={style.boxAuthor}>
                <b>{ell.author}</b>
                <p>{ell.date}</p>
              </div>
              <div className={style.boxText}>
                <p>{ell.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className={style.commentForm}>
          <h2 className={style.h2_yourComment}>Leave your comment</h2>

          <div className={style.row}>
            <label className={style.field}>
              <span>Name*</span>
              <input type="text" placeholder="Your name" />
            </label>

            <label className={style.field}>
              <span>Email*</span>
              <input type="email" placeholder="Your working email" />
            </label>
          </div>

          <label className={style.field}>
            <span>Your comment*</span>
            <textarea placeholder="Type comment here" rows={4}></textarea>
          </label>

          <button type="submit" className={style.submitBtn}>
            POST COMMENT
          </button>
        </form>
      </div>
    </section>
  );
};

export default HowNews;
