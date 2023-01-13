import React from "react";
import { Modal } from "@mantine/core";
import "./RegisterModalStyle.css";
import RegisterForm from "../RegisterForm/RegisterForm";
import ModalTitle from "./ModalTitle";

const RegisterModal = ({ openRegistration, handleCloseModal }) => {
  return (
    <Modal
      opened={openRegistration}
      onClose={handleCloseModal}
      transition="scale"
      transitionDuration={1600}
      transitionTimingFunction="ease"
      fullScreen
      title={<ModalTitle />}
    >
      <div className="RegisterModal-container">
        <div className="blur1" ></div>
        <div className="blur2"></div>
        <RegisterForm handleCloseModal={handleCloseModal} />
      </div>
    </Modal>
  );
};

export default RegisterModal;
