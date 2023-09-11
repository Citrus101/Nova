import React from "react";
import "./AboutUs.css";
import universe from "./Images/Universe.webp";

export const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs-left">
        <p className="superscript">ABOUT US</p>
        <div className="title">What is Astronomy?</div>
        <p className="aboutTeam">
          Astronomy is the study of everything in the universe beyond Earth's
          atmosphere. That includes objects we can see with our naked eyes, like
          the Sun , the Moon , the planets, and the stars . It also includes
          objects we can only see with telescopes or other instruments, like
          faraway galaxies and tiny particles.
        </p>
      </div>
      <img src={universe} alt="" />
    </div>
  );
};
