import "./Welcome.css";
import React from "react";
import ImageSlider from "./ImageSlider/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Welcome = () => {
  return (
    <div className="main-page">
      <ImageSlider />
    </div>
  );
};

export default Welcome;
