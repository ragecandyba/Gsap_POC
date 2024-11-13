import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Lottie from "lottie-react";
import mouse from "./component/mouse.json";
import Dropimage from "./Dropimage";
import ImageCon from "./ImageCon";

gsap.registerPlugin(CSSPlugin);

function Mohit() {
  const titleRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline.set(".titleup div", {
      autoAlpha: 0,
      y: 50,
    });

    // Animation for the first title
    timeline.to(".titleup div:first-child", {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
    });

    // Animation for the second title
    timeline.to(".titleup div:nth-child(2)", {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
    });

    timeline.to(".titleup div:nth-child(3)", {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
    });

    timeline.to(".titleup div:nth-child(4)", {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
    });

    timeline.to(".titleup div:nth-child(5)", {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      duration: 1,
    });

    titleRef.current.animation = timeline;
    titleRef.current.animation.play();
  }, []);

  return (
    <>
      <div
        className="titleup"
        ref={titleRef}
        style={{ textAlign: "center", height: "120vh" }}
      >
        <div style={{ fontSize: "35px" }}>Hi</div>
        <div style={{ fontSize: "35px" }}>My name is Yash</div>
        <div style={{ fontSize: "30px" }}>
          I am a Creative Developer and Web Designer specializing in creating
          web apps with clean user interface and optimized user experience.
        </div>
        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              backgroundColor: "black",
              padding: "8px",
              borderRadius: "4px",
              fontSize: "20px",
              width: "175px",
              height: "55px",
              color: "white",
              fontWeight: "400",

              placeItems: "center",
            }}
          >
            About Me
          </button>
        </div>
        <div
          style={{
            width: "70px",
            height: "70px",
            marginLeft: "35%",
            marginTop: "7%",
          }}
        >
          <Lottie animationData={mouse} height="100%" width="100%" />
        </div>
      </div>

      <ImageCon />
    </>
  );
}

export default Mohit;
