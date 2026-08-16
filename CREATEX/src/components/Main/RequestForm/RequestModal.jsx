import style from "./requestModal.module.css";

const RequestModal = ({ setRequestMdl }) => {
  return (
    <>
      <div className={style.mainModal}>
        <button onClick={() => setRequestMdl(false)} className={style.btnClose}>
          X
        </button>

        <h3>Subscribe to our newsletter</h3>
        <form className={style.inptBox}>
          <label htmlFor="name">
            Name*
            <input id="name" type="text" placeholder="Your name" />
          </label>
          <label htmlFor="email">
            Email*
            <input id="email" type="email" placeholder="Your working email" />
          </label>
        </form>

        <button className={style.btnSubmit}>SEND</button>
      </div>
    </>
  );
};

export default RequestModal;
