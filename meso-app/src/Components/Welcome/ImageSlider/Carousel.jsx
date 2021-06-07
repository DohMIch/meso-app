import React from "react";
import "./Carousel.css";
import { images } from "../../../Images/images";

const Carousel = () => {
  return (
    <div className="content">
      <div className="imageCarousel">
        {images.map((image) => {
          return (
            <div key={image.id} className="thumbnail">
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
