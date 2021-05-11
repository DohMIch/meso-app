import React from "react";
import "./Styles/Nav-Styles.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Router>
      <div className="navbar navbar-dark bg-dark">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            CONTACT
          </Link>
          <Link
            to="/services"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            SERVICES
          </Link>
        </div>
        <div className="logo">MESOLIN</div>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
