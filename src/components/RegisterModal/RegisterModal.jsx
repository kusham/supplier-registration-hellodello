import React, { useState } from "react";
import { Modal } from "@mantine/core";
import "./RegisterModalStyle.css";
import RegisterForm from "../RegisterForm/RegisterForm";
import ModalTitle from "./ModalTitle";

const RegisterModal = ({ openRegistration, handleCloseModal }) => {
  const [isSucceed, setIsSucceed] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <Modal
      opened={openRegistration}
      onClose={handleCloseModal}
      transition="scale"
      transitionDuration={1600}
      transitionTimingFunction="ease"
      fullScreen
      title={!isError && !isSucceed && <ModalTitle />}
    >
      <div className="RegisterModal-container">
        <div className="blur1"></div>
        <div className="blur2"></div>
        <RegisterForm
          handleCloseModal={handleCloseModal}
          isSucceed={isSucceed}
          setIsSucceed={setIsSucceed}
          isError={isError}
          setIsError={setIsError}
        />
      </div>
    </Modal>
  );
};

export default RegisterModal;
