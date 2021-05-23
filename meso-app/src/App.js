import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Welcome from "./Components/Welcome/Welcome";
import About from "./Components/Navigation/Pages/About";
import Contact from "./Components/Navigation/Pages/Contact";
import Services from "./Components/Navigation/Pages/Services";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ul className="routes">
          <div className="brand-name">
            <Link to="/" className="navLink">
              <b>MESOLIN</b>
            </Link>
          </div>
          <div className="page-links">
            <li className="link">
              <Link to="/About" className="navLink">
                About
              </Link>
            </li>
            <li className="link">
              <Link to="/Contact" className="navLink">
                Contact
              </Link>
            </li>
            <li className="link">
              <Link to="/Services" className="navLink">
                Services
              </Link>
            </li>
          </div>
        </ul>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
        </Switch>
      </Router>
      <Footer className="footer" />
    </div>
  );
};

export default App;
