import "../Design/NavContainer.css";
import "../Design/ButtonModul.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import navtitle from "./Image/navtitle/Spardha.png";

const NavBar = () => {
  const [display, setDisplay] = useState(false);
  function setIsOpen() {
    let active = document.getElementsByClassName("hide-display")[0]; // Get the first element
    if (active) {
      active.classList.toggle("show-menu"); // Toggle the class
    }
    setDisplay(!display); // Update state
  }

  return (
    <div>
      <nav className="Container">
        <img className="HeaderName" src={navtitle} alt="Spardha img" />
        <ul className="hide-display">
          <li className="list-box">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="list-box">
            <Link className="link" to="/About">About</Link>
          </li>

          <li>
            <Link className="link" to="/Event">Event</Link>
          </li>
          <li>
            <Link className="link" to="/Results">Results</Link>
          </li>
          <li>
            {" "}
            <Link className="link" to="/Contact"> Contact</Link>
          </li>
        </ul>

        <div className="btn">
          <button className="Registration">Registration</button>
          <button className="Login">Login</button>
        </div>
        <div className="harm-burger" onClick={setIsOpen}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
