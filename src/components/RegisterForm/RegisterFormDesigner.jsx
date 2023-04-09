import React, { useState } from "react";
import "./RegisterFormStyle.css";
import { questions } from "../../Resources/Data/DesignerQuestions";
import InputSection from "./InputSection";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { checkBrandName, checkEmail, saveSupplier } from "../../apis/supplier";
import Notifications from "../notification/Notifications";

const RegisterFormDesigner = ({
  handleCloseModal,
  setIsSucceed,
  isSucceed,
  isError,
  setIsError,
}) => {
  const [section, setSection] = useState(questions[0]);
  const [designerData, setDesignerData] = useState({
    designerName: "",
    dob: "",
    address: "",
    college: "",
    course: "",
    coursePeriod: "",
    email: "",
    contactNumber: "",
    achievements: "",
    resume: "",
    attachments: ""
  });
  const [isUsed, setIsUsed] = useState(false);

  const sectionForward = async (name) => {
    if (
      name === "email" && (await checkEmail(designerData[name]))
    ) {
      setSection(questions[section.nextId - 1]);
      // setIsUsed(false);
    } else if (name === "email") {
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
    // const data = await saveSupplier(designerData);
    // if (data.success) {
    //   setIsSucceed(true);
    // } else {
    //   setIsError(true);
    // }
  };

  const handleDesignerData = (event) => {
    setDesignerData({
      ...designerData,
      [event.target.name]: event.target.value,
    });
    setIsUsed(false);
  };
  const handleDatePicker = (date) => {
    setDesignerData({
      ...designerData,
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
                  handleData={handleDesignerData}
                  data={designerData}
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

export default RegisterFormDesigner;
