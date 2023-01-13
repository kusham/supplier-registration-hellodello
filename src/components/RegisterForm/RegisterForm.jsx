import React, { useState } from "react";
import "./RegisterFormStyle.css";
import { questions } from "../../Resources/Data/SupplierQuestions";
import InputSection from "./InputSection";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { checkEmail, saveSupplier } from "../../apis/supplier";

const RegisterForm = ({handleCloseModal}) => {
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
  const [isUsed, setIsUsed] = useState(false);
  const sectionForward = async (name) => {
    if (name === "email" || name === "brandName") {
      if (await checkEmail(supplierData[name])) {
        setSection(questions[section.nextId - 1]);
      }else {
        setIsUsed(true);
      }
    } else {
    setSection(questions[section.nextId - 1]);
    }
  };

  const sectionBackward = () => {
    setSection(questions[section.prevId - 1]);
  };

  const handleSubmit = async () => {
    // submit data
    const data = await saveSupplier(supplierData);
    if (data.success) {
      handleCloseModal();
    }
  };

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
          <div className="row g-5">
            <div
              className="col-sm-12 col-lg-6 RegisterForm-image"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <img src={section.image} alt="image1" />
            </div>
            <div className="col-sm-12 col-lg-6 RegisterForm-inputSection">
              <InputSection
                section={section}
                sectionForward={sectionForward}
                handleSubmit={handleSubmit}
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
