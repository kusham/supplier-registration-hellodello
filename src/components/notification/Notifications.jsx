import React from "react";
import { Notification } from '@mantine/core';

const Notifications = () => {
  return (
    <Notification
      icon={<i class="fa fa-check"></i>}
      color="green"
      radius="lg"
      title="Registration Successful"
    >
      All your details have been saved successfully.
    </Notification>
  );
};

export default Notifications;
