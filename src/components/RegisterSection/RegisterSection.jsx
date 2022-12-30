import React from "react";
import "./RegisterSectionStyle.css";
import twoGirls from "../../Resources/Images/two-girls.png";

const RegisterSection = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 RegisterSection-image">
            <img src={twoGirls} alt="twoGirls" />
          </div>
          <div className="col-sm-12 col-md-6 mt-sm-5 RegisterSection-text">
            <h1>Merchant </h1>
            <h1>Registration</h1>
            <p>Let’s build something special !</p>
            <button>ENROLL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
