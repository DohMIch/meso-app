import React from "react";
import "../Styles/Nav-Styles.css";
import logo from "../../../Images/image/logo.jpeg";

const Contact = () => {
  return (
    <div className="contact">
      <img src={logo} alt="logo" className="logo" />
      <div className="contactInfo">
        <div>
          <h1>Instagram: </h1>
          <h3>House of Mesolin</h3>
        </div>
        <div>
          <h1>Telephone #: </h1>
          <h3>08137376648</h3>
        </div>
        <div>
          <h1>Email: </h1>
          <h3>houseofmesolin@yahoo.com</h3>
        </div>
        <div>
          <h1>Address: </h1>
          <h3>
            Our office is located at <div>SHOP 7 OZO NWAYO PLAZA</div> Along{" "}
            <div>KWATA JUNCTION ROAD AWKA, ANAMBRA STATE</div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
