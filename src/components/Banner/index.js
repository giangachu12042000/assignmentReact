import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
  const arrImage = [
    "images/slide-1.jpg",
    "images/slide-2.jpg",
    "images/slide-3.jpg",
  ];

  return (
    <div className="">
      <div className="slide-container">
        {/* silde */}
        <Slide>
          {arrImage.map((item, key) => {
            return (
              <div key={key} className="each-slide h-1/6">
                <img
                  src={item}
                  alt=""
                  className="bg-center bg-fixed bg-center"
                />
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default Banner;
