import React from "react";
import "../Styles/Nav-Styles.css";
import coverPhoto from "../../../Images/image/linda_smiling_cover_photo.jpg";

const About = () => {
  return (
    <div className="content">
      <img src={coverPhoto} alt="ms mesolin smiling" className="coverPhoto" />
      <div className="aboutContent">
        <h1>
          My name is Mmesoma Linda, I am passionate about fashion designing,
          making people look good and comfortable. I have a Bsc in Mass
          communication and I am a graduate of Gmyt Fashion Academy,Lagos,
          Nigeria. I believe that any outfit should be worn with confidence. I
          am eager to learn and evolve, that’s why Mesolin is ever growing and
          upgrading.
        </h1>
      </div>
    </div>
  );
};

export default About;
