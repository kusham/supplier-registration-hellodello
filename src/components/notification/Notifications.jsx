import { Button } from "@mantine/core";
import React from "react";
import "./NotificationStyle.css";

const Notifications = ({ isSucceed, handleCloseModal }) => {
  return (
    <div className="Notifications-container">
      {isSucceed ? (
        <>
          <i
            style={{ backgroundColor: "rgb(11, 185, 11)" }}
            className="fa fa-check"
          ></i>
          <h4>Registration Successful</h4>
          <p>All your details have been saved successfully.</p>
        </>
      ) : (
        <>
          <i
            style={{ backgroundColor: "red" }}
            className="fa fa-circle-xmark"
          ></i>
          <h4 style={{ color: "red" }}>Something went wrong !</h4>
          <p>Thank you for trying to register. Please try again later.</p>
        </>
      )}
      <Button color="dark" radius="xl" uppercase onClick={handleCloseModal}>
        close
      </Button>
    </div>
  );
};

export default Notifications;
