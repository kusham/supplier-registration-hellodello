import React, { useState } from "react";
import { Modal } from "@mantine/core";
import "./RegisterModalStyle.css";
import RegisterFormMerchant from "../RegisterForm/RegisterFormMerchant";
import ModalTitle from "./ModalTitle";
import RegisterFormDesigner from "../RegisterForm/RegisterFormDesigner";

const RegisterModal = ({ modalNo, openRegistration, handleCloseModal }) => {
  const [isSucceed, setIsSucceed] = useState(false);
  const [isError, setIsError] = useState(false);

  const modalContent = () => {
    if (modalNo == 0) {
      return (
        <RegisterFormMerchant
          handleCloseModal={handleCloseModal}
          isSucceed={isSucceed}
          setIsSucceed={setIsSucceed}
          isError={isError}
          setIsError={setIsError}
        />
      );
    } else if (modalNo == 1) {
      return (
        <RegisterFormDesigner
          handleCloseModal={handleCloseModal}
          isSucceed={isSucceed}
          setIsSucceed={setIsSucceed}
          isError={isError}
          setIsError={setIsError}
        />
      );
    }
  };
  return (
    <Modal
      opened={openRegistration}
      onClose={handleCloseModal}
      transition="scale"
      transitionDuration={1600}
      transitionTimingFunction="ease"
      fullScreen
      title={!isError && !isSucceed && <ModalTitle modalNo={modalNo} />}
    >
      <div className="RegisterModal-container">
        {modalNo == 0 ? (
          <>
            <div className="blur1"></div>
            <div className="blur2"></div>
          </>
        ) : (
          <>
            <div className="blur3"></div>
            <div className="blur4"></div>
          </>
        )}
        {modalContent()}
      </div>
    </Modal>
  );
};

export default RegisterModal;
