import React from "react";
import { slideItem } from "../../Resources/Data/Slides";
import "./ImageSlideShowStyle.css";

const ImageSlideShow = () => {
  return (
    <>
      <div
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
      </div>
      {/* <div className="Navbar-carousel-indicators">
        <svg height="100" width="100">
          <circle
            cx="10"
            cy="10"
            r="10"
            fill="red"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
        <i class="fa-solid fa-circle"></i>
      </div> */}
    </>
  );
};

export default ImageSlideShow;
