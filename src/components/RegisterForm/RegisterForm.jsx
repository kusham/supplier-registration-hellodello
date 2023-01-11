import React, { useState } from "react";
import "./RegisterFormStyle.css";
import { questions } from "../../Resources/Data/SupplierQuestions";
import InputSection from "./InputSection";
import { CSSTransition, TransitionGroup } from "react-transition-group";



const RegisterForm = () => {
  const [section, setSection] = useState(questions[0]);
  const [supplierData, setSupplierData] = useState({
    brandName: "",
    establishmentYear: "",
    productCategory: "",
    websiteLink: "",
    portfolioSize: "",
    approximateRevenue: "",
    linksOfTopSellingProducts: "",
    physicalShops: "",
    brandPresentation: "",
    imagesOfStore: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const sectionForward = () => {
    setSection(questions[section.nextId - 1]);
  };

  const sectionBackward = () => {
    setSection(questions[section.prevId - 1]);
  };
  console.log(section);

  const handleSupplierData = (event) => {
    setSupplierData({
      ...supplierData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="RegisterForm-container container">
          <TransitionGroup>
            <CSSTransition key={section.id} timeout={1}>
      <div className="row">
        <div className="col-6" data-aos="fade-down" data-aos-duration="2000">
          <img src={section.image} alt="image1" />
        </div>
        <div className="col-6 RegisterForm-inputSection">
              <InputSection
                section={section}
                sectionForward={sectionForward}
                sectionBackward={sectionBackward}
                handleSupplierData={handleSupplierData}
                supplierData={supplierData}
              />
        </div>
      </div>
            </CSSTransition>
          </TransitionGroup>
    </div>
  );
};

export default RegisterForm;
