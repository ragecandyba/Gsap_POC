import React, { useEffect, useRef } from "react";
import "./Gsap.css";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

function Gsap() {
  const textRef = useRef(null);
  const revtextRef = useRef(null);

  const [textInViewRef, textInView] = useInView({
    threshold: 0.1,
  });

  const [revtextInViewRef, revtextInView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (textInView) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const screenWidth = window.innerWidth;
        const xPos = gsap.utils.mapRange(0, screenWidth, -700, 700, scrollY);
        gsap.to(textRef.current, { x: xPos });
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [textInView]);

  useEffect(() => {
    if (revtextInView) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const screenWidth = window.innerWidth;
        const xPos = gsap.utils.mapRange(0, screenWidth, 700, -700, scrollY);
        gsap.to(revtextRef.current, { x: xPos });
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [revtextInView]);

  return (
    <div className="header">
      <div ref={textInViewRef}>
        <p ref={textRef} style={{ textAlign: "center" }}>
          Hii-My-Name-Is-Yash
        </p>
      </div>
      <div ref={revtextInViewRef}>
        <p ref={revtextRef} style={{ textAlign: "center" }}>
          Hii-My-Name-Is-Yash
        </p>
      </div>
    </div>
  );
}

export default Gsap;
