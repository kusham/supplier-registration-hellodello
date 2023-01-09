import React from "react";
import introduction from "../../Resources/Videos/introduction.mp4";
import "./IntroVideoStyle.css";

const IntroVideo = () => {
  return (
    <div className="IntroVideo-content">
      <div className="IntroVideo-title">
        <h1 data-aos="fade-left" data-aos-duration="1000">
          WHO ARE WE ?
        </h1>
      </div>
      <div
        className="IntroVideo-video"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <video width="100%" loop muted autoPlay>
          <source src={introduction} type="video/mp4" />
          Error Message
        </video>
      </div>
    </div>
  );
};

export default IntroVideo;
