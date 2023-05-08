import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/greeting">Greeting</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
