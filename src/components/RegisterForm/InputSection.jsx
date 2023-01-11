import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Button } from "@mantine/core";

const InputSection = ({
  section,
  sectionForward,
  handleSupplierData,
  supplierData,
}) => {
  const [show, setShow] = useState(false);
  const [inputData, setInputData] = useState("");
  const handleAnimation = () => {
    setShow(!show);
  };

  // console.log(supplierData[section.InputName]);

  const handleContinue = () => {
    sectionForward();
  };
  return (
    <div
      className="InputSection-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="InputSection-header">
        <h1>{section?.title}</h1>
      </div>
      <div
        className="InputSection-description"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p>{section?.description}</p>
      </div>
      <div
        className="InputSection-input"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h6>{section?.label}</h6>
        <Input
          icon={<i class="fa-solid fa-at"></i>}
          variant="unStyled"
          placeholder={section?.placeholder}
          onChange={handleSupplierData}
          name={section?.InputName}
          // value={supplierData[section?.InputName || 'email']}
        />
      </div>
      <div
        className="InputSection-continue"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Button
          color="dark"
          radius="xl"
          uppercase
          // disabled={supplierData[section?.InputName || 'email'] ? false : true}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
