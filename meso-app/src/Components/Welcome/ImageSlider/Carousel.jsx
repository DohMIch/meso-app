import React from "react";
import "./Carousel.css";
import { images } from "../../../Images/images";
import logo from "../../../Images/image/logo.jpeg";

const Carousel = () => {
  return (
    <div className="content">
      <img src={logo} alt="logo" className="LogoImage" />
      <div className="imageCarousel">
        {images.map((image) => {
          return (
            <div>
              <img src={image.img} alt={image.desc} className="image" />
              <p className="desc">{image.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
