import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="logo-container">
          <img src="/finkeep_logo.png" alt="Description of the image" />
        </Link>
        <div className={`menu-items-container ${menuOpen ? "menu-open" : ""}`}>
          <div className="menu-item">
            <Link to="/" className="menu-text">
              Home
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/aboutus" className="menu-text">
              About Us
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/offerings" className="menu-text">
              Offerings
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/contactus" className="menu-text">
              Contact Us
            </Link>
          </div>
          <div className="get-started-button">
            <button onClick={handleClick} className="button-text">
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="menu-btn">
        <button onClick={handleMenuClick}>
          <HiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
