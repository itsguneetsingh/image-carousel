import React, { useState } from "react";
import "./carousel.css";

export const Carousel = ({ data, infinity }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (infinity === true) {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }
  };

  const prevSlide = () => {
    if (infinity === true) {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }
  };

  return (
    <div className="carousel">
      <span onClick={prevSlide} className="arrow arrow-left">
        Prev
      </span>
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <span onClick={nextSlide} className="arrow arrow-right">
        Next
      </span>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <div
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></div>
          );
        })}
      </span>
    </div>
  );
};
