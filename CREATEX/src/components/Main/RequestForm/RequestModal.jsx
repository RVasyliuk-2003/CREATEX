import { useState } from "react";
import style from "./requestModal.module.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'’\s-]{2,30}$/;

const RequestModal = ({ setRequestMdl }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      return setError("Please fill in all the fields!");
    }
    if (!nameRegex.test(name.trim())) {
      return setError("Please enter a valid name (2-30 characters)");
    }
    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }

    setError("Great!");
    setName("");
    setEmail("");
  };

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
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              id="name"
              type="text"
              placeholder="Your name"
            />
          </label>
          <label htmlFor="email">
            Email*
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              id="email"
              type="email"
              placeholder="Your working email"
            />
          </label>
        </form>

        <button onClick={(e) => handleSubmit(e)} className={style.btnSubmit}>
          SEND
        </button>

        {error && (
          <p
            style={{
              color: error === "Great!" ? "green" : "red",
              marginTop: "20px",
              fontSize: "18px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default RequestModal;
