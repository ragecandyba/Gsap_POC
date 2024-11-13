import React, { useEffect } from "react";
import { CSSPlugin } from "gsap/CSSPlugin";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./index.css";

const Dropimage = () => {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);

  // useEffect(() => {
  //   let masks = document.querySelectorAll(".masks");
  //   const totalDuration = 1;
  //   const individualDuration = totalDuration / masks.length;

  //   masks.forEach((mask, index) => {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mask,
  //         toggleActions: "play none play none",
  //       },
  //     });

  //     tl.set(mask, { autoAlpha: 0, y: -500 });
  //     tl.to(
  //       mask,
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: individualDuration,
  //       },
  //       `=${index}`
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   let masks1 = document.querySelectorAll(".borderimage");
  //   const totalDuration1 = 1;
  //   const individualDuration1 = totalDuration1 / masks1.length;

  //   masks1.forEach((mask1, index1) => {
  //     let tl1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mask1,
  //         toggleActions: "play none play none",
  //       },
  //     });

  //     tl1.set(mask1, { autoAlpha: 0, y: -500 });
  //     tl1.to(
  //       mask1,
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: individualDuration1,
  //       },
  //       `=${index1}`
  //     );
  //   });
  // }, []);

  // useEffect(() => {
  //   let masks2 = document.querySelectorAll(".borderimage1");
  //   const totalDuration2 = 1;
  //   const individualDuration2 = totalDuration2 / masks2.length;

  //   masks2.forEach((mask2, index2) => {
  //     let tl2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mask2,
  //         toggleActions: "play none play none",
  //       },
  //     });

  //     tl2.set(mask2, { autoAlpha: 0, y: -500 });
  //     tl2.to(
  //       mask2,
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: individualDuration2,
  //       },
  //       `=${index2}`
  //     );
  //   });
  // }, []);
  useEffect(() => {
    /*Name of the container which contains the images */
    let masks = document.querySelectorAll(".masks");

    masks.forEach((mask) => {
      /*Select the img tag where-ever present in the given container */
      let image = mask.querySelector("img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          /*Repeat the animations again and again on view or when the user reaches that div */
          // toggleActions: "restart none none reset",
          /*Play the animation only once, when the user reaches that div */
          toggleActions: "play none play none",
        },
      });

      /*.Set is use to set the initial position (before the animation) */
      tl.set(mask, {
        autoAlpha: 1,
      });

      /*Image enterance effect from left to right */
      tl.from(mask, {
        xPercent: -100,
        duration: 1.5,
      });
      tl.from(image, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        duration: 1.5,
      });
    });
  }, []);

  // useEffect(() => {
  //   let masks1 = document.querySelectorAll(".mask1");

  //   masks1.forEach((mask1) => {
  //     let image1 = mask1.querySelector("img");

  //     let tl1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mask1,
  //         // toggleActions: "restart none none reset",
  //         toggleActions: "play none play none",
  //       },
  //     });

  //     tl1.set(mask1, { autoAlpha: 1 });

  //     tl1.from(mask1, {
  //       xPercent: 100,
  //       duration: 1.5,
  //     });
  //     tl1.from(image1, {
  //       xPercent: -100,

  //       delay: -1.5,
  //       duration: 1.5,
  //     });
  //   });
  // }, []);

  useEffect(() => {
    /*Name of the container which contains the images */
    let masks1 = document.querySelectorAll(".borderimage1");

    masks1.forEach((mask1) => {
      /*Select the img tag where-ever present in the given container */
      let image1 = mask1.querySelector("img");

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: mask1,
          /*Repeat the animations again and again on view or when the user reaches that div */
          // toggleActions: "restart none none reset",
          /*Play the animation only once, when the user reaches that div */
          toggleActions: "play none play none",
        },
      });

      /*.Set is use to set the initial position (before the animation) */
      tl1.set(mask1, {
        autoAlpha: 1,
      });

      /*Image enterance effect from bottom to top */
      tl1.from(mask1, {
        yPercent: 100,
        duration: 1.5,
      });

      tl1.from(image1, {
        yPercent: -100,
        delay: -1.5,
        duration: 1.5,
      });
    });
  }, []);

  useEffect(() => {
    /*Name of the container which contains the images */
    let masks2 = document.querySelectorAll(".borderimage2");

    masks2.forEach((mask2) => {
      /*Select the img tag where-ever present in the given container */
      let image2 = mask2.querySelector("img");

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: mask2,
          /*Repeat the animations again and again on view or when the user reaches that div */
          // toggleActions: "restart none none reset",
          /*Play the animation only once, when the user reaches that div */
          toggleActions: "play none play none",
        },
      });

      /*.Set is use to set the initial position (before the animation) */
      tl2.set(mask2, {
        autoAlpha: 1,
      });

      /*Image enterance effect from top to bottom */
      tl2.from(mask2, {
        yPercent: -100,
        duration: 1.5,
      });

      tl2.from(image2, {
        yPercent: 100,
        delay: -1.5,
        duration: 1.5,
      });
    });
  }, []);

  return (
    <>
      <div style={{ width: "100%", height: "100vh", padding: "5px" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "30px",
          }}
        >
          Shoes
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            marginBottom: 40,
            marginTop: 50,
          }}
        >
          <div className="borderimage2">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/49994138-c049-4ce4-a670-c42efd06ade4/dunk-low-shoes-Knf0qX.png"
              alt="Y"
              className="images"
            />
          </div>
          <div className="borderimage2">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07f289b9-7ca1-49ec-a347-b69b95e17032/air-jordan-1-low-se-shoes-H7DD5v.png"
              alt="A"
              className="images"
            />
          </div>
          <div className="borderimage2">
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png"
              alt="S"
              className="images"
            />
          </div>
          <div className="borderimage2">
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/60618c33-70df-45c4-98eb-4870f2625b6c/custom-nike-air-force-1-mid-by-you-shoes.png"
              alt="H"
              className="images"
            />
          </div>
        </div>
        <div style={{ fontSize: "18px" }}>
          <p>
            Nature is a wondrous tapestry of life that surrounds us, offering a
            source of profound beauty and inspiration. It encompasses the
            diverse landscapes, flora, and fauna that make up our planet. From
            the majestic mountains that scrape the sky to the tranquil meadows
            teeming with wildflowers, nature's diversity is both awe-inspiring
            and humbling.
          </p>
          <p style={{ marginTop: "15px" }}>
            The natural world provides us with essential resources such as clean
            air, water, and fertile soil, which sustain life as we know it. It
            is a refuge for countless species, each playing a unique role in the
            intricate web of life. From the smallest insects to the largest
            mammals, every creature contributes to the delicate balance of
            ecosystems.{" "}
          </p>
          <p style={{ marginTop: "15px" }}>
            Yet, nature is more than just a provider of resources; it is a
            source of solace and rejuvenation for the human spirit. The simple
            act of immersing oneself in a forest, listening to the soothing
            sounds of a babbling brook, or watching the colors of a sunset can
            heal the soul and bring a sense of peace. It's a reminder of our
            connection to the earth and the importance of preserving it for
            future generations.{" "}
          </p>
          <p style={{ marginTop: "15px" }}>
            In our modern, fast-paced world, it is crucial that we cherish and
            protect nature. Conservation efforts, sustainable practices, and a
            deep respect for the environment are necessary to ensure that the
            beauty and resources of the natural world continue to enrich our
            lives and sustain the planet for years to come. Nature is a precious
            gift that we must value and nurture, for it is a reflection of the
            earth's resilience and the splendor of life itself.
          </p>
        </div>
      </div>
      <div style={{ width: "100%", height: "100vh", padding: "5px" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "30px",
          }}
        >
          Bags
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            marginBottom: 40,
            marginTop: 50,
          }}
        >
          <div className="masks">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c9cab5ae-6d77-49d9-ae99-7eac4f699449/hayward-backpack-lM67TS.png"
              alt="Y"
              className="images"
            />
          </div>
          <div className="masks">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1cd40da0-d59b-4eb8-8175-6db015c645eb/heritage-backpack-BRL0XV.png"
              alt="A"
              className="images"
            />
          </div>
          <div className="masks">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8bb787b-871d-49e3-92ae-32befd68d0a0/brasilia-9-5-training-backpack-DQvDHm.png"
              alt="S"
              className="images"
            />
          </div>
          <div className="masks">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5cf8377-4e65-43f0-86b2-70d75f0e899e/tech-hip-pack-5FdD5F.png"
              alt="H"
              className="images"
            />
          </div>
        </div>
        <div style={{ fontSize: "18px" }}>
          <p>
            Nature is a wondrous tapestry of life that surrounds us, offering a
            source of profound beauty and inspiration. It encompasses the
            diverse landscapes, flora, and fauna that make up our planet. From
            the majestic mountains that scrape the sky to the tranquil meadows
            teeming with wildflowers, nature's diversity is both awe-inspiring
            and humbling.
          </p>
          <p style={{ marginTop: "15px" }}>
            The natural world provides us with essential resources such as clean
            air, water, and fertile soil, which sustain life as we know it. It
            is a refuge for countless species, each playing a unique role in the
            intricate web of life. From the smallest insects to the largest
            mammals, every creature contributes to the delicate balance of
            ecosystems.{" "}
          </p>
          <p style={{ marginTop: "15px" }}>
            Yet, nature is more than just a provider of resources; it is a
            source of solace and rejuvenation for the human spirit. The simple
            act of immersing oneself in a forest, listening to the soothing
            sounds of a babbling brook, or watching the colors of a sunset can
            heal the soul and bring a sense of peace. It's a reminder of our
            connection to the earth and the importance of preserving it for
            future generations.{" "}
          </p>
          <p style={{ marginTop: "15px" }}>
            In our modern, fast-paced world, it is crucial that we cherish and
            protect nature. Conservation efforts, sustainable practices, and a
            deep respect for the environment are necessary to ensure that the
            beauty and resources of the natural world continue to enrich our
            lives and sustain the planet for years to come. Nature is a precious
            gift that we must value and nurture, for it is a reflection of the
            earth's resilience and the splendor of life itself.
          </p>
        </div>
      </div>

      <div style={{ width: "100%", height: "100vh", padding: "5px" }}>
        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "30px",
          }}
        >
          T-Shirts
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            marginBottom: 40,
            marginTop: 50,
          }}
        >
          <div className="borderimage1">
            <img
              src="https://m.media-amazon.com/images/I/61skRXsvE9L.jpg"
              alt="Y"
              className="images"
            />
          </div>
          <div className="borderimage1">
            <img
              src="https://www.armani.com/variants/images/1647597284678781/F/w400.jpg"
              alt="A"
              className="images"
            />
          </div>
          <div className="borderimage1">
            <img
              src="https://www.armani.com/variants/images/1647597314239664/D/w400.jpg"
              alt="S"
              className="images"
            />
          </div>
          <div className="borderimage1">
            <img
              src="https://dressland.in/cdn/shop/files/1117Wx1400H-410368347-1883-MODEL_1200x1200.jpg?v=1687435723"
              alt="H"
              className="images"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropimage;
