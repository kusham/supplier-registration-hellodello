import React from "react";
import "./RegisterSectionStyle.css";
import twoGirls from "../../Resources/Images/two-girls.png";

const RegisterSection = ({ setOpenRegistration }) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="col-sm-12 col-md-6 RegisterSection-image"
          >
            <img src={twoGirls} alt="twoGirls" />
          </div>

          <div className="col-sm-12 col-md-6 mt-sm-5 RegisterSection-text">
            <h1 data-aos="fade-left" data-aos-duration="1000">
              Merchant{" "}
            </h1>
            <h1 data-aos="fade-left" data-aos-duration="1000">
              Registration
            </h1>
            <p data-aos="fade-left" data-aos-duration="2000">
              Let’s build something special !
            </p>
            <button
              onClick={() => setOpenRegistration(true)}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              ENROLL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
