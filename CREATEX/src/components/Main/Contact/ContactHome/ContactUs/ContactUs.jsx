import style from "./contactUs.module.css";
import { useState } from "react";

import contactImg from "./images/contactImg.jpg";

const ContactUs = () => {
  // inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // selects
  const [interes, setInteres] = useState("");
  const [location, setLocation] = useState("");

  // radio and checkbox
  const [method, setMethod] = useState("Phone");
  const [communicat, setCommunicat] = useState(false);

  const [error, setError] = useState("");

  const isEmailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  const isPhoneValid = /^[\d\s\-\+\(\)]{10,20}$/.test(phone);

  const redultForm = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !message.trim() ||
      !interes.trim() ||
      !location.trim() ||
      !communicat
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!isPhoneValid) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!isEmailValid) {
      setError("Please enter a valid email address containing '@'.");
      return;
    }

    if (!message.trim()) {
      setError("Please enter your message.");
      return;
    }

    if (!interes) {
      setError("Please select what you are interested in.");
      return;
    }

    if (!location) {
      setError("Please select a location.");
      return;
    }

    if (!communicat) {
      setError("Please agree to receive communications.");
      return;
    } else {
      setError("");

      console.log({
        name,
        phone,
        email,
        interes,
        location,
        method,
        message,
        communicat,
      });

      setName("");
      setPhone("Phone");
      setEmail("");
      setMessage("");
      setInteres("");
      setLocation("");
      setCommunicat(false);
    }
  };

  return (
    <section>
      <div className="container">
        <h2 className={style.h2}>Contact us</h2>
        <p className={style.p_main}>
          Please complete the form. Detailed information will help us to make a
          tuned offer.
        </p>

        <div className={style.formContainer}>
          <img src={contactImg} alt="contacts" />

          <form className={style.contactForm}>
            <div className={style.rowForm}>
              <div className={style.columnForm}>
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
                  <span>Phone*</span>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
              <div className={style.columnForm}>
                <div className={style.field}>
                  <span>I am interested in</span>
                  <select
                    defaultValue={interes}
                    onChange={(e) => setInteres(e.target.value)}
                  >
                    <option disabled hidden>
                      Choose service
                    </option>
                    <option value="interior">Interior Design</option>
                    <option value="architecture">Architecture</option>
                    <option value="construction">Construction</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>

                <div className={style.field}>
                  <span>Location*</span>
                  <select
                    defaultValue={location}
                    required
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option disabled hidden>
                      Choose location
                    </option>
                    <option value="new-york">New York</option>
                    <option value="new-jersey">New Jersey</option>
                    <option value="san-francisco">San Francisco</option>
                  </select>
                </div>
                <div className={style.field}>
                  <span>Preferred contact method*</span>
                  <div className={style.contactMethod}>
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        defaultChecked
                        value="phone"
                        checked={method === "phone"}
                        onChange={(e) => setMethod(e.target.value)}
                      />
                      <span>Phone</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={method === "email"}
                        onChange={(e) => setMethod(e.target.value)}
                      />
                      <span>Email</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="viber"
                        checked={method === "viber"}
                        onChange={(e) => setMethod(e.target.value)}
                      />
                      <span>Viber</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.textareaBox}>
              <label className={style.field}>
                <span>Message*</span>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
              <div className={style.sendBox}>
                <label className={style.checkboxSend}>
                  <input
                    type="checkbox"
                    checked={communicat}
                    onChange={(e) => setCommunicat(e.target.checked)}
                  />
                  <span>
                    I agree to receive communications from Createx Construction
                    Bureau.
                  </span>
                </label>
                <button
                  className={style.btnForm}
                  onClick={(e) => redultForm(e)}
                >
                  SEND REQUEST
                </button>
              </div>
              {error && <p className={style.error}>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
