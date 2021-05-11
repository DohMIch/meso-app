import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div style={{ textAlign: "center", margin: "auto" }}>
        <b style={{ color: "white" }}>&copy; All Rights Reserved</b>
        <p style={{ color: "white" }}>{year}</p>
      </div>
    </div>
  );
};

export default Footer;
