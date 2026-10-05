import style from "./cottage.module.css";

import bgImg from "./images/bg.png";
import left from "./images/Left.svg";
import right from "./images/Right.svg";

import { NavLink } from "react-router-dom";

import { useState } from "react";

import projectsData from "./projectsData";

const Cottage = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const currentProject = projectsData[currIndex];

  return (
    <section className={style.positionSectionForBg}>
      <img className={style.bgImg} src={bgImg} alt="bgImg" />
      <div className="container">
        <div className={style.navLinkBox}>
          <NavLink
            className={({ isActive }) => isActive && style.active}
            to="/"
          >
            Homepage
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && style.active}
            to="/WorkHome"
          >
            / Work
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && style.active}
            to="/Work"
          >
            / Modern Cottage
          </NavLink>
        </div>

        <h1 className={style.h1_cottage}>{currentProject.title}</h1>
        <div className={style.mainImgBox}>
          <img
            className={style.mainImg}
            src={currentProject.mainImg}
            alt="mainImg"
          />
          <div className={style.btnBox}>
            <button
              style={{ marginLeft: "32px" }}
              onClick={() =>
                setCurrIndex((prev) =>
                  prev === 0 ? projectsData.length - 1 : prev - 1,
                )
              }
            >
              <img src={left} alt="left" />
            </button>
            <button
              style={{ marginRight: "32px" }}
              onClick={() =>
                setCurrIndex((prev) => (prev + 1) % projectsData.length)
              }
            >
              <img src={right} alt="right" />
            </button>
          </div>
        </div>

        <div className={style.allImgContainer}>
          {projectsData.map((ell, index) => (
            <img
              key={ell.id}
              src={ell.mainImg}
              alt={ell.title}
              className={index === currIndex ? "" : style.active}
              onClick={() => setCurrIndex(index)}
            />
          ))}
        </div>

        <div className={style.goalContainer}>
          <div className={style.infoGoalBox}>
            <h2>Project goal</h2>

            <p>{currentProject.goal}</p>
            <p className={style.p_description}>{currentProject.description}</p>
          </div>

          <div className={style.detailsBox}>
            <div className={style.detailsFlexBox}>
              <div className={style.column_box}>
                <b>LOCATION</b>
                <b>CLIENT</b>
                <b>ARCHITECT</b>
                <b>SIZE</b>
                <b>VALUE</b>
                <b>COMPLETED</b>
              </div>

              <div className={style.column_box}>
                <p>{currentProject.details.location}</p>
                <p>{currentProject.details.client}</p>
                <p>{currentProject.details.architect}</p>
                <p>{currentProject.details.size}</p>
                <p>{currentProject.details.value}</p>
                <p>{currentProject.details.completed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cottage;
