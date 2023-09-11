import React from "react";
import { Nav } from "./Nav.jsx";
import { Hero } from "./Hero.jsx";
import { AboutUs } from "./AboutUs.jsx";
import { Footer } from "./Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="home">
        <Nav />
        <Hero />
      </div>
      <AboutUs />
      <Footer />
    </>
  );
}
