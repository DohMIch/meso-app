import "./Welcome.css";
import React from "react";
import Carousel from "./ImageSlider/Carousel";
import logo from "../../Images/image/logo.jpeg";

const Welcome = () => {
  return (
    <div className="main-page">
      <img src={logo} alt="logo" className="logoImage" />
      <Carousel />
    </div>
  );
};

export default Welcome;
