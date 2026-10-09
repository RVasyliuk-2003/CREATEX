import style from "./contactUs.module.css";

import contactImg from "./images/contactImg.jpg";

const ContactUs = () => {
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
                  <input type="text" placeholder="Your name" />
                </label>
                <label className={style.field}>
                  <span>Phone*</span>
                  <input type="tel" placeholder="Your phone number" />
                </label>
                <label className={style.field}>
                  <span>Email</span>
                  <input type="email" placeholder="Your working email" />
                </label>
              </div>
              <div className={style.columnForm}>
                <div className={style.field}>
                  <span>I am interested in</span>
                  <select>
                    <option>Interior Design</option>
                    <option>Interior Design</option>
                    <option>Interior Design</option>
                  </select>
                </div>
                <div className={style.field}>
                  <span>Location*</span>
                  <select>
                    <option>New York</option>
                    <option>New York</option>
                    <option>New York</option>
                  </select>
                </div>
                <div className={style.field}>
                  <span>Preferred contact method*</span>
                  <div className={style.contactMethod}>
                    <label>
                      <input type="radio" name="contactMethod" defaultChecked />
                      <span>Phone</span>
                    </label>
                    <label>
                      <input type="radio" name="contactMethod" />
                      <span>Email</span>
                    </label>
                    <label>
                      <input type="radio" name="contactMethod" />
                      <span>Viber</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.textareaBox}>
              <label className={style.field}>
                <span>Message*</span>
                <textarea placeholder="Your message" rows={4}></textarea>
              </label>
              <div className={style.sendBox}>
                <label className={style.checkboxSend}>
                  <input type="checkbox" />
                  <span>
                    I agree to receive communications from Createx Construction
                    Bureau.
                  </span>
                </label>
                <button className={style.btnForm}>SEND REQUEST</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
