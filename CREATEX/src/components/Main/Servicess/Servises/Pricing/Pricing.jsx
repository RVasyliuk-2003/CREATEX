import style from "./pricing.module.css";
import image from "./images/image.svg";
import mark from "./images/Mark.svg";

const Pricing = () => {
  return (
    <section className={style.bg_section}>
      <img className={style.bg_img} src={image} alt="image" />
      <div className="container">
        <h4 className={style.pricing_H4}>Pricing</h4>
        <p className={style.pricing_P}>
          We offer you three categories of construction.
        </p>

        <table className={style.pricing_table}>
          <tr>
            <th className={style.th_items}>Items</th>
            <th>
              BASIC <p className={style.p_for_th}>$20 per m2</p>
            </th>
            <th>
              STANDARD <p className={style.p_for_th}>$30 per m2</p>
            </th>
            <th>
              BUSINESS <p className={style.p_for_th}>$40 per m2</p>
            </th>
          </tr>
          <tr>
            <td>Installation plan</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>Planning solutions (2-3 options)</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>Lighting plan</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>Flooring plan</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>Heating floor laying scheme</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>Air conditioner zones layout</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>3D visualization of all rooms</td>
            <td>simplified</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>Visualization of each room (3-4 angles)</td>
            <td>
              <td>{""}</td>
            </td>
            <td>{""}</td>
            <td>
              <img src={mark} alt="mark" />
            </td>
          </tr>
          <tr>
            <td>Terms</td>
            <td>10 days</td>
            <td>20 days</td>
            <td>30 days</td>
          </tr>
          <tr>
            <td>{""}</td>
            <td>
              <button className={style.btn_table}>SEND REQUEST</button>
            </td>
            <td>
              <button className={style.btn_table}>SEND REQUEST</button>
            </td>
            <td>
              <button className={style.btn_table}>SEND REQUEST</button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Pricing;
