import React from "react";
import "./RegisterFormStyle.css";
import image1 from "../../Resources/Images/6.png";
import InputSection from "./InputSection";

const questions = [
  {
    id: 1,
    title: "Welcome to HELLODELLO",
    label: "Email:",
    placeholder: "Your email",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet eius vero accusamus expedita eaque labore non ad excepturi! Eius",
  nextId: 2,
    },

    {
      id: 2,
      title: "Name of Your brand name",
      label: "Brand name:",
      placeholder: "Enter Your brand name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet eius vero accusamus expedita eaque labore non ad excepturi! Eius",
    nextId: 3,
      },

      {
        id: 3,
        title: "company Establishment",
        label: "Year of Establishment:",
        placeholder: "Select year",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet eius vero accusamus expedita eaque labore non ad excepturi! Eius",
      nextId: 4,
        },
];

const RegisterForm = () => {
  return (
    <div className="RegisterForm-container container">
      <div className="row">
        <div className="col-6">
          <img src={image1} alt="image1" />
        </div>
        <div className="col-6 RegisterForm-inputSection">
          
          <InputSection />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
