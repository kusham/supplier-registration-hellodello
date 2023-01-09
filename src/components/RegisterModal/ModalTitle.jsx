import React from "react";
import logo from "../../Resources/Images/HelloDello-logo.png";

const ModalTitle = () => {
  return (
    <div className="ModalTitle-container">
      <img className="Navbar-logo" src={logo} alt="HelloDello-logo" />
      <h2>Sell With HelloDello</h2>
    </div>
  );
};

export default ModalTitle;
