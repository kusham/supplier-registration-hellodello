import React, { useState } from "react";
import "./RegisterFormStyle.css";
import { questions } from "../../Resources/Data/SupplierQuestions";
import InputSection from "./InputSection";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { checkBrandName, checkEmail, saveSupplier } from "../../apis/supplier";
import Notifications from "../notification/Notifications";

const RegisterFormMerchant = ({
  handleCloseModal,
  setIsSucceed,
  isSucceed,
  isError,
  setIsError,
}) => {
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
    if (
      (name === "email" && (await checkEmail(supplierData[name]))) ||
      (name === "brandName" && (await checkBrandName(supplierData[name])))
    ) {
      setSection(questions[section.nextId - 1]);
      // setIsUsed(false);
    } else if (name === "email" || name === "brandName") {
      setIsUsed(true);
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
      setIsSucceed(true);
    } else {
      setIsError(true);
    }
  };

  const handleSupplierData = (event) => {
    setSupplierData({
      ...supplierData,
      [event.target.name]: event.target.value,
    });
    setIsUsed(false);
  };
  const handleDatePicker = (date) => {
    setSupplierData({
      ...supplierData,
      establishmentYear: date,
    });
  };
  return (
    <div className="RegisterForm-container container">
      {!isError && !isSucceed ? (
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
                  data={supplierData}
                  handleDatePicker={handleDatePicker}
                  isUsed={isUsed}
                />
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <Notifications
          isSucceed={isSucceed}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default RegisterFormMerchant;
