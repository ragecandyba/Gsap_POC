import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useRef } from "react";

function ImageCon() {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  const boxRef = useRef(null);

  useEffect(() => {
    let masks = document.querySelectorAll(".imagess");

    masks.forEach((mask) => {
      let image = mask.querySelector("img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          toggleActions: "restart none none reset",
          start: "start center",
          end: "end center",
          markers: true,

          //   toggleActions: "play none play none",
        },
      });

      tl.set(mask, { autoAlpha: 1 });
      const scroll = window.screenY;
      tl.from(mask, {
        yPercent: -100,
        duration: 1.5,
      });
      tl.from(image, {
        yPercent: 100,
        delay: -1.5,

        duration: 1.5,
      });
    });
  }, []);

  return (
    <>
      <div style={{ marginLeft: "30%" }}>
        <div
          className="imagess"
          style={{
            position: "relative",
            height: "100vh",
            visibility: "hidden",
            animation: "swing",
            overflow: "hidden",
          }}
        >
          <img
            src="https://mohitkumar.dev/Images/HeavenlyBodies/Planets.webp"
            alt="Y"
            className="imagesss"
          />
        </div>
      </div>
    </>
  );
}

export default ImageCon;
