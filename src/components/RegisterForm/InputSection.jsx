import React, { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";

const InputSection = () => {
  const [show, setShow] = useState(false);
  const handleAnimation = () => {
    setShow(!show);
  };

  useEffect(() => {
    handleAnimation();
  });

  return (
    <motion.div
      className="InputSection-container"
    //   initial={{ opacity: 0, scale: 0 }}
    //   animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0 }}
    //   transition={{ duration: 2 }}
    >
      <div className="InputSection-header">
        <h1>Welcome to HEllODELLO !</h1>
      </div>
      <div
        className="InputSection-description"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet
          eius vero accusamus expedita eaque labore non ad excepturi! Eius
        </p>
      </div>
      <div
        className="InputSection-input"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h6>Email</h6>
        <Input
          icon={<i class="fa-solid fa-at"></i>}
          variant="unStyled"
          placeholder="Your email"
        />
      </div>
      <div
        className="InputSection-continue"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Button
          color="dark"
          radius="xl"
          uppercase
          onClick={() => setShow(!show)}
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );
};

export default InputSection;
