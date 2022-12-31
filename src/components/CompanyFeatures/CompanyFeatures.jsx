import React from "react";
import onTimeDeliveryIcon from "../../Resources/icons/on-time-delivery-icon.png";
import cashbackUsdIcon from "../../Resources/icons/cashback-usd-icon.png";
import femaleServicesSupportIcon from "../../Resources/icons/female-services-support-icon.png";
import buyerProtectionIcon from "../../Resources/icons/buyer-protection-icon.png";

import './CompanyFeaturesStyle.css'
const CompanyFeatures = () => {
  return (
    <div className="CompanyFeatures-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 CompanyFeatures-item" data-aos="fade-up"
            data-aos-duration="1000">
            <img src={onTimeDeliveryIcon} alt="onTimeDeliveryIcon" />
            <div className="CompanyFeatures-icon-text">
              <h6>Shipping Island wide</h6>
              <p>
                3 working days within Colombo and suburbs
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 CompanyFeatures-item" data-aos="fade-up"
            data-aos-duration="2000">
          <img src={cashbackUsdIcon} alt="onTimeDeliveryIcon" />
            <div className="CompanyFeatures-icon-text">
              <h6>14 Days Return</h6>
              <p>
              Any products can be refunded for cash to the exact value of your products
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 CompanyFeatures-item" data-aos="fade-up"
            data-aos-duration="3000">
          <img src={buyerProtectionIcon} alt="onTimeDeliveryIcon" />
            <div className="CompanyFeatures-icon-text">
              <h6>Security Payments</h6>
              <p>
                we unsure secure payment 
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 CompanyFeatures-item" data-aos="fade-up"
            data-aos-duration="4000">
          <img src={femaleServicesSupportIcon} alt="onTimeDeliveryIcon" />
            <div className="CompanyFeatures-icon-text">
              <h6>24/7 Support</h6>
              <p>
                contact us 24 hours a day, 7 days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyFeatures;
