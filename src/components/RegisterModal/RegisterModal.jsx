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
        <div className="blur" style={{ top: "2%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        <RegisterForm handleCloseModal={handleCloseModal} />
      </div>
    </Modal>
  );
};

export default RegisterModal;
