import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Navigator() {
  return (
    <div className="navbar">
      <nav>
        <h1>S.</h1>

        <ul>
          <NavLink to="/">
            {" "}
            <li>Home</li>{" "}
          </NavLink>
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/projects">
            <li>Projects</li>
          </NavLink>
          <NavLink to="/services">
            <li>Services</li>
          </NavLink>
        </ul>

        <button>Contact Us</button>
      </nav>
    </div>
  );
}

export default Navigator;
