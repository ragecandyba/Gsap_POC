import React, { useEffect, useRef } from "react";
import "./Gsapcircle.css";
import { CSSPlugin } from "gsap/CSSPlugin";
import { gsap } from "gsap";

const Gsapcircle = () => {
  gsap.registerPlugin(CSSPlugin);

  const shapeRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    /*position for each icons */
    const iconPositions = [
      { x: "-127px", y: "100px", className: "icon" },
      { x: "-219px", y: "180px", className: "icon" },
      { x: "-208px", y: "300px", className: "icon" },
      { x: "-117px", y: "440px", className: "icon" },
      { x: "10px", y: "520px", className: "icon" },
      { x: "125px", y: "425px", className: "icon" },
      { x: "203px", y: "300px", className: "icon" },
      { x: "204px", y: "180px", className: "icon" },
      { x: "126px", y: "100px", className: "icon" },
      { x: "10px", y: "100px", className: "icon" },
    ];

    const timeline = gsap.timeline({ paused: true });
    let mm =
      gsap.matchMedia(); /*matchmedia is used in gsap for making the animations responsive */

    /*another way to add min and max width= "(min-width: 768px) and (max-width: 1024px)" */
    mm.add("(min-width: 1400px)", () => {
      /*.set is used to set the initial position or required css before the animation starts */
      gsap.set(shapeRef.current, { autoAlpha: 1, y: 0, x: 0 });
      gsap.set(iconsRef.current, {
        autoAlpha: 0 /*autoalpha works same as css-visiblity */,
        y: 260,
      });
      iconsRef.current.forEach((iconRef, index) => {
        const position = iconPositions[index];

        timeline.to(
          iconRef,
          {
            duration: 1 /*Duration for total animation to complete*/,
            x: iconPositions[index].x,
            y: iconPositions[index].y,
            className: position.className,
            autoAlpha: 1,
          },
          `-=${-index}`
          /* works as dependencies for all the animations to work simultaneously, so the duration is total 1 for animation to get over
           */
          /*If the minus sign is removed like (=${index}), 
          in this case the icons will appears one after another, 
          also the duration given will apply to each icon, so duration 1 for each icon  */
        );
      });
    });
    shapeRef.current.animation = timeline;

    /*The code below indicates that, when the user scrolls and reahced that div or part, then only the animation should start, orelse nothing will happen */
    /*Also the aniamtion will work only once */
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          shapeRef.current.animation.play();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    if (shapeRef.current) {
      observer.observe(shapeRef.current);
    }
  }, []);

  return (
    <>
      <div className="shape-container">
        {/* the entry point for the animation to start */}
        <div className="shape" ref={shapeRef}>
          <img
            src="https://www.garwarefibres.com/themes/custom/garware/app/images/about_us/Polygon-md.png"
            alt="polygon"
            className="images"
          />

          <h3 className="centered">Associated Brands</h3>
        </div>

        <div className="icons">
          {/* give ref to each  of the icons you want to make animate */}
          <div className="" ref={(el) => (iconsRef.current[0] = el)}>
            <p>Alythea</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[1] = el)}>
            <p>Eva</p>
          </div>

          <div className="" ref={(el) => (iconsRef.current[2] = el)}>
            <p>Volcom</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[3] = el)}>
            <p>French Sole</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[4] = el)}>
            <p>Jade</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[5] = el)}>
            <p>Forester Flannels</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[6] = el)}>
            <p>Mystree</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[7] = el)}>
            <p>Wrangler</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[8] = el)}>
            <p>Versace</p>
          </div>
          <div className="" ref={(el) => (iconsRef.current[9] = el)}>
            <p>Van Heusen</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gsapcircle;
