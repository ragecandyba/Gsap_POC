import React, { useEffect, useRef } from "react";
import "./title.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "./Image";
import News from "./News";

// import SplitType from "split-type";
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(CSSPlugin);

const Title = ({ titlename }) => {
  const titleRef = useRef();
  // const titleRef2 = useRef();
  // const titleRef3 = useRef();

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks

    // eslint-disable-next-line
    // const mtText = new SplitType("#my-text");

    const timeline = gsap.timeline({ paused: true });
    // timeline.set(".char" || titleRef2.current, {
    //   autoAlpha: 0,
    // });
    // timeline.to(".char", {
    //   autoAlpha: 1,
    //   y: 0,
    //   stagger: 0.05,
    //   delay: 0.2,
    //   duration: 0.01,
    //   fontSize: 30,
    //   fontFamily: "Monaco,monospace",
    // });

    timeline.set(".lines span", {
      autoAlpha: 0,
      y: 100,
    });

    timeline.to(".lines span", {
      autoAlpha: 1,
      y: 0,
      ease: "power4.out",
      delay: 0.5,
      duration: 1,
    });

    // timeline.to(
    //   titleRef2.current,
    //   {
    //     autoAlpha: 1,
    //     rotation: 360,
    //     y: 150,
    //     yoyo: true,
    //     repeat: 6,
    //     ease: "Power2.easeInOut",
    //     color: "red",
    //   },
    //   "<"
    // );

    titleRef.current.animation = timeline;
    titleRef.current.animation.play();
    return () => {
      timeline.kill(); // Cleanup the animation on unmount (optional).

      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current.animation.play();
            //   titleRef2.current.animation.play();
            observer.unobserve(entry.target);
          }
        });
      };

      const observerOptions = {
        rootMargin: "0% 100% 0% 0%",
      };

      const observer = new IntersectionObserver(
        handleIntersection,
        observerOptions
      );
      if (titleRef.current) {
        observer.observe(titleRef.current);
      }
      return () => {
        observer.disconnect();
      };
    };
  }, []);

  return (
    <>
      {/* <div className="titlecontainer">
        <div className="title" id="my-text" ref={titleRef}>
          Title Title Title Title Title Title Title
          <p /> Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title
        </div>
      </div>
      <div className="titlecontainer2">
        <div className="title2" id="my-text2" ref={titleRef2}>
          Title Title Title Title Title Title Title
          <p /> Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title Title Title Title Title Title
          <p />
          Title Title Title Title
        </div>
      </div> */}
      <div
        className="container headers"
        ref={titleRef}
        style={{ marginTop: "50px" }}
      >
        <h5 className="lines">
          <span>{titlename},</span>
        </h5>
      </div>
    </>
  );
};

export default Title;
