import React from "react";
import logo from "./Images/Nova-logo.png";
import home from "./Images/Home.png";
import about from "./Images/About-us.png";
import contact from "./Images/Contact-us.png";
import "./Nav.css";

export const Nav = () => {
  function scrollAbout() {
    window.scroll({
      top: 743,
      behavior: "smooth",
    });
  }

  function scrollContact() {
    window.scroll({
      top: 800,
      behavior: "smooth",
    });
  }

  return (
    <div className="Nav">
      <img src={logo} alt="Nova Logo" className="Nav-logo" />
      <div className="Nav-links">
        <div>
          <img src={home} alt="earth logo" />
          <p>Home</p>
        </div>
        <div>
          <img src={about} alt="blackhole logo" />
          <p onClick={scrollAbout}> About Us</p>
        </div>
        <div>
          <img src={contact} alt="Reciever logo" />
          <p onClick={scrollContact}>Contact Us</p>
        </div>
      </div>
    </div>
  );
};
