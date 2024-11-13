import React from "react";
import "./new.css";

import img2 from "./assests/Images/8.webp";
import img3 from "./assests/Images/9.webp";
import img4 from "./assests/Images/4.webp";
import img5 from "./assests/Images/5.webp";
import img6 from "./assests/Images/6.webp";
import img7 from "./assests/Images/10.webp";

import { CurvedCarousel } from "../src/component/index";
import Form from "./Form";
import Slider from "../src/Slider";

function Gallery() {
  // eslint-disable-next-line no-lone-blocks
  {
    document.title = "Home";
  }
  return (
    <>
      <section id="home" className="home">
        <div class="home_page">
          <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
          <div class="home_txt">
            <p class="collectio">SUMMER COLLECTION</p>
            <h2>
              FALL - WINTER
              <br />
              Collection 2023
            </h2>
            <div class="home_label ">
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                <br />
                with an unwavering commitment to exceptional quality.
              </p>
            </div>
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
              }}
              className="shopnowbutton"
            >
              <a href="#">SHOP NOW</a>
            </button>
          </div>
        </div>
      </section>
      <div className="slicker">
        <Slider />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "5%",
          userSelect: "none",
        }}
        className="carosel"
      >
        <CurvedCarousel
          childWidth={220} /*adjust the width for each image in the carousel */
          curve={
            70
          } /* adjust the degree for each image (how tilt the image will be) in the carousel */
          spacing={
            10
          } /* adjust the white space between each image in the carousel*/
          style={{
            height: 350,
          }}
        >
          <img src={img2} alt="img2" />
          <img src={img3} alt="img3" />
          <img src={img4} alt="img4" />
          <img src={img5} alt="img5" />
          <img src={img6} alt="img6" />
          <img src={img7} alt="img7" />
        </CurvedCarousel>
      </div>
      <Form />
    </>
  );
}

export default Gallery;
