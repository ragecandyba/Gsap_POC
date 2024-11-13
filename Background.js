import React, { useEffect, useRef } from "react";
import "./Component1.css";
import { Container, Col, Row } from "react-bootstrap";
import { gsap } from "gsap";
import img1 from "../src/component/1.jpg";
import img2 from "../src/component/2.jpg";
import img3 from "../src/component/3.jpg";
import img4 from "../src/component/4.png";
// import img5 from "../src/component/5.png";
import shoes from "../src/component/shoes.jpg";

import { CSSPlugin } from "gsap/CSSPlugin";
import Title from "./Title";

const Component1 = () => {
  // eslint-disable-next-line no-lone-blocks
  {
    document.title = "Products";
  }
  const mockData = [
    {
      src: "https://i.postimg.cc/zD02zJq8/na2.png",
      price: "$ 20",
      title: "PS England Bag",
      status: "Available",
    },
    {
      src: img1,
      price: "$ 10",
      title: "PS England Orange Shoes",
      status: "Available",
    },
    {
      src: img2,
      price: "$ 7",
      title: "PS England Shoes",
      status: "Available",
    },
    {
      src: img3,
      price: "$ 7.5",
      title: "PS England Jacket ",
      status: "Disabled",
    },
    {
      src: img4,
      price: "$ 50",
      title: "PS England Shirt ",
      status: "Disabled",
    },
    {
      src: "https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png",
      price: "$ 150",
      title: "PS England Sunglass",
      status: "Disabled",
    },
    {
      src: "https://i.postimg.cc/zD02zJq8/na2.png",
      price: "$ 20.45",
      title: "PS England Bag",
      status: "Disabled",
    },
    {
      src: "https://i.postimg.cc/fbnB2yfj/na1.png",
      price: "$ 30",
      title: "PS England T-Shirt",
      status: "Available",
    },
    {
      src: img3,
      price: "$ 15.75",
      title: "PS England Glasses",
      status: "Disabled",
    },
    {
      src: "https://i.postimg.cc/fbnB2yfj/na1.png",
      price: "$ 8.3",
      title: "PS England T-Shirt ",
      status: "Disabled",
    },
    {
      src: "https://i.postimg.cc/RhVP7YQk/hs1.png",
      price: "$ 30",
      title: "PS England T-Shirt",
      status: "Available",
    },
  ];

  gsap.registerPlugin(CSSPlugin);
  const backRef = useRef();
  useEffect(() => {
    gsap.set(backRef.current, {
      /*.set is used to set before animation effects */
      backgroundColor: "white",
      autoAlpha: 1 /*Same as CSS-visiblity */,
    });

    const timeline = gsap.timeline({ paused: true });
    /*Change the background color of the div and text color of the elements in div */
    timeline.to(backRef.current, {
      backgroundColor: "#D4D4D4",
      autoAlpha: 1 /*Same as CSS-visiblity */,
      duration: 4,
      color: "black",
    });
    backRef.current.animation = timeline;

    /* Play the animation when user scrolls and reaches that div*/
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          backRef.current.animation.play();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3 /*To set a tigger point in the div. When the user reaches that point while scrolling the animation will be triggered */,
    });

    if (backRef.current) {
      observer.observe(backRef.current);
    }
  }, []);

  return (
    <>
      {/* Title animation entrance effects */}
      <Title titlename="Gallery" />
      <section id="home">
        <div class="home_page ">
          <div class="home_img ">
            <img src={shoes} alt="img " />
          </div>
        </div>
      </section>
      <div>
        <div className="componentcontainer">
          <div className="imgcontainer">
            <Container>
              <Row>
                {mockData.map((data, index) => (
                  <Col sm={3} key={index} className="img-check">
                    <div
                      style={{
                        border: "2px solid",
                        borderColor: "gray",
                        borderRadius: "20px",
                      }}
                    >
                      <div>
                        <img
                          src={data.src}
                          alt={data?.title}
                          style={{ borderRadius: "20px", position: "relative" }}
                        />
                        <p
                          style={{
                            position: "absolute",
                            marginLeft: "15px",
                            marginTop: "-19%",
                            backgroundColor:
                              data.status === "Available"
                                ? "#cefad0"
                                : "#FFCCCB",
                            color:
                              data.status === "Available" ? "green" : "red",
                            padding: "5px 10px  ",
                            borderRadius: "45px",
                            fontSize: "14px",
                          }}
                        >
                          {data?.status}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h4
                          style={{
                            marginLeft: "5px",
                            fontSize: "16px",
                            marginTop: "5px",
                          }}
                        >
                          {data.title}
                        </h4>
                        <div
                          style={{
                            marginLeft: "5px",

                            color: "#ff5e14",
                          }}
                        >
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <div
                          style={{
                            marginLeft: "5px",
                            fontSize: "19px",
                            color: "red",
                          }}
                        >
                          -22%
                        </div>
                        <div style={{ marginLeft: "10px", fontSize: "18px" }}>
                          {data.price}
                          <span
                            style={{
                              fontSize: "10px",
                              marginLeft: "2px",
                              position: "absolute",
                            }}
                          >
                            00
                          </span>
                        </div>
                      </div>
                      <div style={{ marginLeft: "5px" }}>
                        M.R.P:{" "}
                        <span style={{ textDecorationLine: "line-through" }}>
                          $150.00
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "4px",
                        }}
                      >
                        <button
                          style={{
                            borderRadius: "10px",
                            width: "203px",
                            backgroundColor: "#ff5e14",
                          }}
                        >
                          <i class="bi bi-bag-check"></i>
                          <span style={{ marginLeft: "10px" }}>
                            Add to Cart
                          </span>
                        </button>
                      </div>
                      <div style={{ textAlign: "center", fontSize: "12px" }}>
                        <span style={{ fontWeight: "500" }}>
                          Free Delivery.
                        </span>
                        <span
                          style={{
                            marginLeft: "5px",
                            textDecorationLine: "underline",
                            color: "blue",
                            cursor: "pointer",
                          }}
                        >
                          Details
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>

        <div className="componentcontainer2" ref={backRef}>
          <header style={{ textDecorationLine: "underline" }}>
            More Products
          </header>
          <div className="imgcontainer2">
            <i
              class="bi bi-caret-left-fill"
              style={{
                position: "absolute",
                marginTop: "34%",
                marginLeft: "30px",
                fontSize: "50px",
                cursor: "pointer",
                color: "#ff5e14",
              }}
            ></i>
            <i
              class="bi bi-caret-right-fill"
              style={{
                position: "absolute",
                marginTop: "34%",
                marginLeft: "93%",
                fontSize: "50px",
                cursor: "pointer",
                color: "#ff5e14",
              }}
            ></i>
            <Container>
              <Row>
                {mockData.map((data, index) => (
                  <Col sm={3} key={index} className="img-check">
                    <div
                      style={{
                        border: "2px solid",
                        borderColor: "gray",
                        borderRadius: "20px",
                      }}
                    >
                      <div>
                        <img
                          src={data.src}
                          alt={data?.title}
                          style={{ borderRadius: "20px", position: "relative" }}
                        />
                        <p
                          style={{
                            position: "absolute",
                            marginLeft: "15px",
                            marginTop: "-19%",
                            backgroundColor:
                              data.status === "Available"
                                ? "#cefad0"
                                : "#FFCCCB",
                            color:
                              data.status === "Available" ? "green" : "red",
                            padding: "5px 10px  ",
                            borderRadius: "45px",
                            fontSize: "14px",
                          }}
                        >
                          {data?.status}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h4
                          style={{
                            marginLeft: "5px",
                            fontSize: "16px",
                            marginTop: "5px",
                          }}
                        >
                          {data.title}
                        </h4>
                        <div
                          style={{
                            marginLeft: "5px",

                            color: "#ff5e14",
                          }}
                        >
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-half"></i>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <div
                          style={{
                            marginLeft: "5px",
                            fontSize: "19px",
                            color: "red",
                          }}
                        >
                          -22%
                        </div>
                        <div style={{ marginLeft: "10px", fontSize: "18px" }}>
                          {data.price}
                          <span
                            style={{
                              fontSize: "10px",
                              marginLeft: "2px",
                              position: "absolute",
                            }}
                          >
                            00
                          </span>
                        </div>
                      </div>
                      <div style={{ marginLeft: "5px" }}>
                        M.R.P:{" "}
                        <span style={{ textDecorationLine: "line-through" }}>
                          $150.00
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "4px",
                        }}
                      >
                        <button
                          style={{
                            borderRadius: "10px",
                            width: "203px",
                            backgroundColor: "#ff5e14",
                          }}
                        >
                          <i class="bi bi-bag-check"></i>
                          <span style={{ marginLeft: "10px" }}>
                            Add to Cart
                          </span>
                        </button>
                      </div>
                      <div style={{ textAlign: "center", fontSize: "12px" }}>
                        <span style={{ fontWeight: "500" }}>
                          Free Delivery.
                        </span>
                        <span
                          style={{
                            marginLeft: "5px",
                            textDecorationLine: "underline",
                            color: "blue",
                            cursor: "pointer",
                          }}
                        >
                          Details
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component1;
