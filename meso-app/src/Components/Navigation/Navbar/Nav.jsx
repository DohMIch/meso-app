import React from "react";
import "./Styles/Nav-Styles.css";

const Navigation = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="pageLinks">
        <a className="nav-item nav-link" href="./Pages/About.jsx">
          ABOUT
        </a>
        <a className="nav-item nav-link" href="./Pages/Contact.jsx">
          CONTACT
        </a>
        <a className="nav-item nav-link" href="./Pages/Services.jsx">
          SERVICES
        </a>
      </div>
      <div>ICON</div>
    </div>
  );
};

export default Navigation;
