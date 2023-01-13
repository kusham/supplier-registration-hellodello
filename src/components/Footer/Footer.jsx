import React from "react";
import "./FooterStyle.css";
import logo from "../../Resources/Images/HelloDello-logo.png";
import facebook from "../../Resources/Images/facebook.png";
import instagram from "../../Resources/Images/instagram.png";
import twitter from "../../Resources/Images/twitter.png";
import pinterest from "../../Resources/Images/pinterest.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="container">
        <div className="footer-footerHead ">
          <div className="container">
            <div className="row">
              <div
                className="col-sm-12 col-lg-4 footer-logo"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={logo} alt="helloDello" />
              </div>
              <div
                className="col-sm-12 col-lg-8 footer-nav"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Return & Exchange</p>
                <p>Shipping & Delivery</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-middle container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 footer-aboutUs getToCenter">
              <h5 className="mb-4" data-aos="fade-up" data-aos-duration="1000">
                ABOUT US
              </h5>
              <p data-aos="fade-up" data-aos-duration="2000">
                HelloDello™ are an upcoming world class fashion & lifestyle
                e-commerce platform for all kinds of creative designers and
                manufacturers of premium fashion and lifestyle products, with an
                added focus on finest quality. Our primary goal is promoting
                products which are made in Sri Lanka, thereby creating a
                platform for local entrepreneurship and creativity at a global
                scale. We cover a wide range of products from clothing to
                fashion accessories, books & magazines as well as life-style
                products and smart devices.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 getToCenter">
              <h5
                className="mb-4 mt-sm-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                CATEGORIES
              </h5>
              <p data-aos="fade-up" data-aos-duration="1000">
                Women
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                Men
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                Kids
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                Home & Living
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 mt-md-5 getToCenter">
              <p data-aos="fade-up" data-aos-duration="1000">
                All Kind of Fashion Accessories & Essentials
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                Apparel Industry Services
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                Smart Electronic Technologies & Devices
              </p>
            </div>
          </div>
        </div>
        <div
          className="footer-socialMediaIcon"
          
        >
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={pinterest} alt="pinterest" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>

      <div className="footer-footer-bottom">
        <p>© 2023 - Hello Dello . All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
