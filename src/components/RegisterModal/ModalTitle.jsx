import React from "react";
import logo from "../../Resources/Images/HelloDello-logo.png";

const ModalTitle = ({modalNo}) => {
  return (
    <div className="ModalTitle-container">
      <img className="Navbar-logo" src={logo} alt="HelloDello-logo" />
      <h1>{modalNo==0 ? "Sell": "Design"} With HelloDello</h1>
    </div>
  );
};

export default ModalTitle;
