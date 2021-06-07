import React from "react";
import "../Styles/Nav-Styles.css";
import tailoringEquipment from "../../../Images/image/tailoring_equipment.jpg";

const Services = () => {
  return (
    <div className="container">
      <img src={tailoringEquipment} alt="tailoring equipment" className="img" />
      <div className="servicesInfo">
        <h1>Services</h1>
        <ul>
          <li>
            <h3>Bespoke Tailoring For Males And Females</h3>
          </li>
          <li>
            <h3>Ready To Wear</h3>
          </li>
          <li>
            <h3>Fabric Sourcing</h3>
          </li>
          <li>
            <h3>Consultation And Styling</h3>
          </li>
          <li>
            <h3>Bridal Train</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
