import style from "./projects.module.css";

import fone from "./images/fone.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainContainer}>
          <img className={style.absoluteImg1} src={fone} alt="fone1" />
          <img className={style.absoluteImg2} src={fone} alt="fone2" />

          <div className={style.projectsContainer}>
            <img src={img1} alt="img1" />
            <div className={style.infoImg}>
              <h4>Construction</h4>
              <p>
                Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius
                consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper
                id sodales ultricies sed ut ut augue. Mattis habitant venenatis,
                gravida posuere massa ac interdum. Eget aliquam dignissim ut
                vestibulum.
              </p>
              <button>LEAR MORE</button>
            </div>
          </div>

          <div className={style.projectsContainer}>
            <div className={style.infoImg}>
              <h4>Project Development</h4>
              <p>
                Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet
                viverra in. Est nulla lectus purus tincidunt massa tortor.
                Hendrerit vulputate elementum blandit massa vitae amet felis
                eget.
              </p>
              <button>LEAR MORE</button>
            </div>
            <img src={img2} alt="img2" />
          </div>
          <div className={style.projectsContainer}>
            <img src={img3} alt="img3" />
            <div className={style.infoImg}>
              <h4>Interior Design</h4>
              <p>
                Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
                lacus, turpis accumsan gravida. Aliquet mattis dignissim massa
                sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel
                eget molestie. Turpis enim arcu, amet donec massa pellentesque
                nulla duis. Arcu dictum metus sed purus senectus faucibus eget
                elementum pretium.
              </p>
              <button>LEAR MORE</button>
            </div>
          </div>
          <div className={style.projectsContainer}>
            <div className={style.infoImg}>
              <h4>Repairs</h4>
              <p>
                Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum
                commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id
                egestas mattis. Turpis viverra nec urna ultrices urna.
              </p>
              <button>LEAR MORE</button>
            </div>
            <img src={img4} alt="img4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
