import React from "react";
import image1 from "../../../Images/logo.jpeg";
import image2 from "../../../Images/linda_smiles.jpeg";
import image3 from "../../../Images/linda_yellow_outfit.jpeg";
import image4 from "../../../Images/linda_orange_jumpsuit.jpeg";
import image5 from "../../../Images/linda_peoples_car_bg.jpeg";
import image6 from "../../../Images/linda_peoples_yellow_outfit.jpeg";
import image7 from "../../../Images/linda_peoples_court_bg.jpeg";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = () => {
  return (
    <Carousel infiniteLoop showThumbs={false}>
      <div>
        <img alt="" src={image2} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img alt="" src={image3} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img alt="" src={image4} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="" src={image5} />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="" src={image6} />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img alt="" src={image7} />
        <p className="legend">Legend 7</p>
      </div>
    </Carousel>
  );
};

export default ImageSlider;
