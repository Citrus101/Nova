import React from "react";
import logo from "./Images/Nova-logo.png";
import home from "./Images/Home.png";
import about from "./Images/About-us.png";
import contact from "./Images/Contact-us.png";
import team from "./Images/Team.png"
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
      top: 1000*1000,
      behavior: "smooth",
    });
  }

  return (
    <div className="Nav">
      <img src={logo} alt="Nova Logo" className="Nav-logo" />
      <div className="Nav-links">
        <div>
          <img src={home} alt="earth logo" />
          <a>Home</a>
        </div>
        <div>
          <img src={team} alt="Astronaut logo" />
          <a>Team</a>
        </div>
        <div>
          <img src={about} alt="blackhole logo" />
          <a onClick={scrollAbout}> About Us</a>
        </div>
        <div>
          <img src={contact} alt="Reciever logo" />
          <a onClick={scrollContact}>Contact Us</a>
        </div>
        
      </div>
    </div>
  );
};
