import React, { useState } from "react";
import "./RegisterSectionStyle.css";
import twoGirls from "../../Resources/Images/two-girls.png";
import RegisterModal from "../RegisterModal/RegisterModal";

const RegisterSection = () => {
  const [openRegistrationMerchant, setOpenRegistrationMerchant] =
    useState(false);
  const [openRegistrationDesigner, setOpenRegistrationDesigner] =
    useState(false);

  const handleCloseModal = () => {
    setOpenRegistrationMerchant(false);
    setOpenRegistrationDesigner(false);
  };

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
              Registration
            </h1>
            <h1 data-aos="fade-left" data-aos-duration="1000">
              is Here !
            </h1>
            <p data-aos="fade-left" data-aos-duration="2000">
              Let’s build something special !
            </p>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 enrollment-buttons">
                <button
                  onClick={() => setOpenRegistrationMerchant(true)}
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Merchant Enrollment
                </button>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 enrollment-buttons">
                <button
                  onClick={() => setOpenRegistrationDesigner(true)}
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Designer Enrollment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal
        modalNo={
          openRegistrationMerchant ? 0 : openRegistrationDesigner ? 1 : null
        }
        openRegistration={openRegistrationMerchant || openRegistrationDesigner}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default RegisterSection;
