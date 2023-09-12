import React from "react";
import "./AboutUs.css";
import universe from "./Images/Universe.webp";
import hubble from "./Images/hubble.jpg";

export const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs-left">
        <p className="superscript">ABOUT US</p>
        <div className="title">What is DJS Nova?</div>
        <p className="aboutContent">
          DJS Nova is the official Astronomy and Astrophysics Club of Dwarkadas
          J Sanghvi College of Engineering. We are dedicated to spread
          awareness, foster research and technological advancements in
          astronomical science and develop a community of passionate engineers
          to explore the wonders of the universe.
          <p>
            Join us on a cosmic journey as we delve into the mysteries of the
            universe, unravel the secrets of celestial bodies, and ignite our
            passion for the captivating field of astronomy. Whether you're a
            student with a curiosity for the stars or an astrophysics aficionado
            seeking like-minded peers, this club is the perfect platform.
          </p>
        </p>
      </div>
      <img src={hubble} alt="" className="hubble" />

      <img src={universe} alt="" className="universe" />
      <div className="aboutUs-right">
        <div className="title">What is Astronomy?</div>
        <p className="aboutContent">
          Astronomy is the study of everything in the universe beyond Earth's
          atmosphere. That includes objects we can see with our naked eyes, like
          the Sun , the Moon , the planets, and the stars . It also includes
          objects we can only see with telescopes or other instruments, like
          faraway galaxies and tiny particles.
        </p>
      </div>
    </div>
  );
};
