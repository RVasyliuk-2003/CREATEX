import style from "./contactForm.module.css";
import "./../../App.css";

const ContactForm = () => {
  return (
    <section id={style.sexBox}>
      <div className="container" id={style.positionContext}>
        <div className={style.formBox}>
          <div className={style.contactBox}>
            <h4>A quick way to discuss details</h4>
            <div className={style.inptContainer}>
              <div className={style.inptBox}>
                <p>Name*</p>
                <input type="text" placeholder="Your name" />
              </div>
              <div className={style.inptBox}>
                <p>Phone*</p>
                <input type="number" placeholder="Your phone number" />
              </div>
              <div className={style.inptBox}>
                <p>Email</p>
                <input type="email" placeholder="Your working email" />
              </div>
              <div className={style.inptBox}>
                <p>Message*</p>
                <input type="text" placeholder="Your message" />
              </div>
              <div className={style.checkboxContainer}>
                <input type="checkbox" />
                <p>
                  I agree to receive communications from Createx <br />{" "}
                  Construction Bureau.
                </p>
              </div>
            </div>
            <button>SEND REQUEST</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
