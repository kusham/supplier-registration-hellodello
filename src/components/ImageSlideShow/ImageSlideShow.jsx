import React from "react";
import "./ImageSlideShowStyle.css";
import image_1 from "../../Resources/Images/1.png";
import image_2 from "../../Resources/Images/2.png";
import image_3 from "../../Resources/Images/3.png";
import image_4 from "../../Resources/Images/4.jpg";
import image_5 from "../../Resources/Images/5.jpg";

const ImageSlideShow = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active ImageSlideShow-slide">
            <img className="d-block w-100" src={image_5} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1>First slide Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid quam porro architecto illum voluptatem dolorem quidem
                ratione labore, vero a impedit atque velit numquam natus nam eum
                quaerat possimus dicta.
              </p>
            </div>
          </div>
          <div className="carousel-item ImageSlideShow-slide">
            <img className="d-block w-100" src={image_3} alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Second slide Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid quam porro architecto illum voluptatem dolorem quidem
                ratione labore, vero a impedit atque velit numquam natus nam eum
                quaerat possimus dicta.
              </p>
            </div>
          </div>
          <div className="carousel-item ImageSlideShow-slide">
            <img className="d-block w-100" src={image_1} alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Third slide Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid quam porro architecto illum voluptatem dolorem quidem
                ratione labore, vero a impedit atque velit numquam natus nam eum
                quaerat possimus dicta.
              </p>
            </div>
          </div>
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
