import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

const InputSection = ({
  section,
  sectionForward,
  sectionBackward,
  handleData,
  data,
  handleSubmit,
  handleDatePicker,
  isUsed,
}) => {
  const [dateValue, setDateValue] = useState("");
  useEffect(() => {
    handleDatePicker(dateValue);
  }, [dateValue]);

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
        {section?.InputName === "establishmentYear" ? (
          <DatePicker
            placeholder={section?.placeholder}
            icon={section?.icon}
            variant="unStyled"
            onChange={setDateValue}
            value={dateValue}
          />
        ) : (
          <Input
            icon={section?.icon}
            variant="unStyled"
            placeholder={section?.placeholder}
            onChange={handleData}
            name={section?.InputName}
            value={data[section?.InputName || "email"]}
          />
        )}
      </div>
      {isUsed && (
        <p className="InputSection-error-message">
          This {section?.label.slice(0, section.label.length - 1)} is already
          being used
        </p>
      )}

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
              data[section?.InputName || "email"] || !section?.required
                ? false
                : true
            }
            onClick={() => sectionForward(section?.InputName)}
          >
            Continue
          </Button>
        ) : (
          <Button color="green" radius="xl" uppercase onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default InputSection;
