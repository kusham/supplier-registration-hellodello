import React from "react";
import "./NavbarStyle.css";
import logo from '../../Resources/Images/HelloDello-logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="Navbar-nav">
        <img className="Navbar-logo" src={logo} alt="HelloDello-logo" />
      </nav>
    </>
  );
};

export default Navbar;
