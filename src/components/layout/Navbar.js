// import "./Navbar.css";
import Navburger from "../Navburger/Navburger";
import "./Navbar.css";

// import logo svg
import logo from "../../assets/imgs/logo.svg"

function Navbar({ burger }) {
  return (
    <div className="nav">
      <div className="nav-row">
        <a href="#home" className="bold h2">
          {/* SG  */}
          <div className="logo-mask" />
        </a>
        <ul className="ul">
          <li className="li">
            <a className="a" href="#home">
              Home
            </a>
          </li>
          <li className="li">
            <a className="a" href="#tech-stack">
              Tech Stack
            </a>
          </li>
          <li className="li">
            <a className="a" href="#about-me">
              About Me
            </a>
          </li>
          <li className="li">
            <a className="a" href="#contact-me">
              Contact Me
            </a>
          </li>
        </ul>
        <Navburger />
      </div>
      {/* Expanded nav for mobile */}
    </div>
  );
}

export default Navbar;
