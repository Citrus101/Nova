import React from "react";
import moon from "./Images/Fullmoon.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="Hero">
      <h1>DJ SANGVI'S OFFICIAL ASTRONOMY CLUB</h1>
      <img src={moon} alt="Full moon picture" />
    </div>
  );
};
