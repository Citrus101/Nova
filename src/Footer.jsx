import React from "react";
import "./Footer.css";
import insta from "./Images/Instagram.png";
import linkedin from "./Images/Linkedin.png";
import github from "./Images/Github.png";

export const Footer = () => {
  return (
    <footer>
      <a href="https://www.instagram.com/">
        <img src={insta} alt="Instagram logo" />
      </a>
      <a href="https://in.linkedin.com/">
        <img src={linkedin} alt="Linkedin logo" />
      </a>
      <a href="https://github.com/Citrus101">
        <img src={github} alt="Github logo" />
      </a>
    </footer>
  );
};
