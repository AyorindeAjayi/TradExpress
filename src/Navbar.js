import React from "react";
import logo from "./images/TradExpress.svg";
import "./Navbar.css";
import hamburger from "./images/icon-hamburger.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/buys">Instant Buy/Sell</Link>
          </li>
          <li>Learn</li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/getstarted">Get Started</Link>
          </li>
        </ul>
        <img
          src={hamburger}
          alt=""
          className="ham"
          onClick={() => setOpen(!open)}
        />
      </div>
    </>
  );
};

export default Navbar;
