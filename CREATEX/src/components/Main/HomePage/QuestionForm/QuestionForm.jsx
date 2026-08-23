import style from "./questionForm.module.css";
import { useState } from "react";

const QuestionForm = () => {
  const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ\s'-]{2,50}$/;
  const phoneRegex =
    /^(?:\+?38)?[\s\(-]*0\d{2}[\s\)-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/;

  const [error, setError] = useState("");
  const [nameInpt, setNameInpt] = useState("");
  const [phoneInpt, setPhoneInpt] = useState("");
  const [commentInpt, setCommentInpt] = useState("");

  const resultForm = () => {
    if (!nameInpt || !phoneInpt || !commentInpt) {
      setError("INVALID");
      return;
    }
    if (!nameRegex.test(nameInpt)) {
      setError("INVALID NAME");
      return;
    }
    if (!phoneRegex.test(phoneInpt)) {
      setError("INVALID PHONE");
      return;
    } else {
      setError("DONE");
      setNameInpt("");
      setPhoneInpt("");
      setCommentInpt("");
    }
  };
  return (
    <section>
      <div className="container">
        <div className={style.mainBoxForm}>
          <h2>Want to know more? Ask us a question:</h2>
          <div className={style.inpBox}>
            <div className={style.inpt}>
              <p>Name</p>
              <input
                value={nameInpt}
                onChange={(e) => setNameInpt(e.target.value)}
                placeholder="Your name"
                type="text"
              />
            </div>
            <div className={style.inpt}>
              <p>Phone</p>
              <input
                value={phoneInpt}
                onChange={(e) => setPhoneInpt(e.target.value)}
                placeholder="Your phone"
                type="number"
              />
            </div>
            <div className={style.inpt}>
              <p>Message</p>
              <input
                value={commentInpt}
                onChange={(e) => setCommentInpt(e.target.value)}
                id={style.textInpt3}
                // className={style.textInpt3}
                placeholder="Your message"
                type="text"
              />
            </div>
            <button onClick={() => resultForm()}>SEND</button>
          </div>

          {error !== "" ? (
            <p style={{ color: error === "DONE" ? "green" : "red" }}>{error}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default QuestionForm;
