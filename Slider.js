import React from "react";
import img2 from "./assests/Images/8.webp";
import img3 from "./assests/Images/9.webp";
import img4 from "./assests/Images/4.webp";
import img5 from "./assests/Images/5.webp";
import img6 from "./assests/Images/6.webp";
import img7 from "./assests/Images/10.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imgs = [
  {
    images: img2,
  },
  {
    images: img3,
  },
  {
    images: img4,
  },
  {
    images: img5,
  },
  {
    images: img6,
  },
  {
    images: img7,
  },
];

function Sliders() {
  const settings = {
    arrows: false,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {imgs.map((ele, key) => {
          return (
            <>
              <div style={{ height: "225px" }}>
                <img src={ele?.images} alt="images" key={key} />
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
}

export default Sliders;
