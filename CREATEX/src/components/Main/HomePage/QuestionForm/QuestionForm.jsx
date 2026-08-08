import style from "./questionForm.module.css";

const QuestionForm = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainBoxForm}>
          <h2>Want to know more? Ask us a question:</h2>
          <div className={style.inpBox}>
            <div className={style.inpt}>
              <p>Name</p>
              <input placeholder="Your name" type="text" />
            </div>
            <div className={style.inpt}>
              <p>Phone</p>
              <input placeholder="Your phone" type="number" />
            </div>
            <div className={style.inpt}>
              <p>Message</p>
              <input
                id={style.textInpt3}
                // className={style.textInpt3}
                placeholder="Your message"
                type="text"
              />
            </div>
            <button>SEND</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionForm;
