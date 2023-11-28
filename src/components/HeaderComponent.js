import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule of Classes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
