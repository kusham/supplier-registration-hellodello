import React from "react";
import { slideItem } from "../../Resources/Data/Slides";
import "./ImageSlideShowStyle.css";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const ImageSlideShow = () => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <>
      <Carousel mx="auto" withIndicators loop plugins={[autoplay.current]} styles={{
        indicator : {
          width:30,
          background: "black"
        },
        
      }}>
        {slideItem.map((slide, i) => (
          <Carousel.Slide key={i} className="ImageSlideShow-slide">
            <img className="d-block w-100" src={slide.image} alt={slide.alt} />
            <div className="carousel-caption d-none d-md-block">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide xyz"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {slideItem.map((slide, i) => (
            <div
            key={i}
              className={
                slide.active
                  ? "carousel-item ImageSlideShow-slide active"
                  : "carousel-item ImageSlideShow-slide"
              }
            >
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.alt}
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div> */}
    </>
  );
};

export default ImageSlideShow;
