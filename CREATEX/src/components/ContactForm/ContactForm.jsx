import style from "./contactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  // input for form
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [error, setError] = useState("");

  const isNameValid = name.trim().length >= 2;

  const phoneRegex = /^\+?[0-9]{9,15}$/;
  const isNumberValid = phoneRegex.test(number.trim());

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email.trim());

  const isFormValid = isNameValid || isNumberValid || isEmailValid;

  const errorForm = () => {
    if (!isFormValid) {
      setError("Please fill in all required fields correctly");
      return;
    }
    if (!isNameValid) {
      setError("Name must be at least 2 characters long");
      return;
    }
    if (!isNumberValid) {
      setError("Please enter a valid phone number");
      return;
    }
    if (!isEmailValid) {
      setError("Please enter a valid email address");
      return;
    }

    if (!checkbox) {
      setError("You must agree to the terms");
      return;
    } else {
      setError("Форма відправлена");

      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
      setCheckbox(false);
    }
  };

  return (
    <section id={style.sexBox}>
      <div className="container" id={style.positionContext}>
        <div className={style.formBox}>
          <div className={style.contactBox}>
            <h4>A quick way to discuss details</h4>
            <div className={style.inptContainer}>
              <div className={style.inptBox}>
                <p>Name*</p>
                <input
                  type="text"
                  value={name}
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.inptBox}>
                <p>Phone*</p>
                <input
                  type="text"
                  value={number}
                  placeholder="Your phone number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className={style.inptBox}>
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  placeholder="Your working email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={style.inptBox}>
                <p>Message*</p>
                <input
                  type="text"
                  value={message}
                  placeholder="Your message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className={style.checkboxContainer}>
                <input
                  type="checkbox"
                  checked={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
                <p>
                  I agree to receive communications from Createx <br />
                  Construction Bureau.
                </p>
              </div>
            </div>
            <p>{error}</p>
            <button onClick={() => errorForm()}>SEND REQUEST</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
