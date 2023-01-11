import React from "react";
import { Input } from "@mantine/core";
import { Button } from "@mantine/core";

const InputSection = ({
  section,
  sectionForward,
  sectionBackward,
  handleSupplierData,
  supplierData,
  handleSubmit
}) => {

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
          icon={section?.icon}
          variant="unStyled"
          placeholder={section?.placeholder}
          onChange={handleSupplierData}
          name={section?.InputName}
          value={supplierData[section?.InputName || "email"]}
        />
      </div>
      <div
        className="InputSection-continue"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {section?.prevId ? (
          <Button color="gray" radius="xl" uppercase onClick={sectionBackward}>
            previous
          </Button>
        ) : (
          <div></div>
        )}

        {section?.nextId ? (
          <Button
            color="dark"
            radius="xl"
            uppercase
            disabled={
              supplierData[section?.InputName || "email"] || !section?.required
                ? false
                : true
            }
            onClick={sectionForward}
          >
            Continue
          </Button>
        ) : (
          <Button
            color="green"
            radius="xl"
            uppercase
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputSection;
