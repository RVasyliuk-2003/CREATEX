import style from "./howNews.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

import { newsData } from "../../NewsHome/Categories/category.js";

import facebook from "./images/Facebook.svg";
import linked from "./images/Linked-In.svg";
import twitter from "./images/Twitter.svg";
import check from "./images/check.svg";
import braces from "./images/braces.svg";

const HowNews = () => {
  const { id } = useParams();

  const currentNews = newsData.find((ell) => ell.id === Number(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const isEmailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  const today = new Date();
  const newId = Date.now();

  const resultForm = (e) => {
    e.preventDefault();

    if (!name.trim() || !emailname.trim() || !commentname.trim()) {
      setError("Please fill in all required fields");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!isEmailValid) {
      setError("Please enter a valid email address containing '@'і");
      return;
    } else {
      const newComment = {
        id: newId,
        author: name,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        text: comment,
      };

      currentNews.comments.push(newComment);

      setName("");
      setEmail("");
      setComment("");
      setError("");
    }
  };

  return (
    <section>
      <div className={style.bacgroundColor}>
        <div className="container">
          <div className={style.linkBox}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/"
            >
              Homepage
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
              to="/NewsHome"
            >
              / News
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
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
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className={style.field}>
              <span>Email*</span>
              <input
                type="email"
                placeholder="Your working email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <label className={style.field}>
            <span>Your comment*</span>
            <textarea
              placeholder="Type comment here"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </label>

          {error && <p className={style.error}>{error}</p>}

          <button
            type="submit"
            className={style.submitBtn}
            onClick={(e) => resultForm(e)}
          >
            POST COMMENT
          </button>
        </form>
      </div>
    </section>
  );
};

export default HowNews;
