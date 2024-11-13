import React, { useEffect } from "react";
import "./image.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Images = [
  {
    url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  },
  {
    url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  },
];

const Image = () => {
  // gsap.registerPlugin(CSSPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let masks = document.querySelectorAll(".mask");

    masks.forEach((mask) => {
      let image = mask.querySelector("img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          // toggleActions: "restart none none reset",
          toggleActions: "play none play none",
        },
      });

      tl.set(mask, { autoAlpha: 1 });

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

  useEffect(() => {
    let masks1 = document.querySelectorAll(".mask1");

    masks1.forEach((mask1) => {
      let image1 = mask1.querySelector("img");

      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: mask1,
          toggleActions: "play none play none",
        },
      });

      tl1.set(mask1, { autoAlpha: 1 });

      tl1.from(mask1, {
        xPercent: -100,
        duration: 1.5,
      });
      tl1.from(image1, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        duration: 1.5,
      });
    });
  }, []);

  return (
    <>
      <div class="container">
        <div class="img_container">
          {Images.map((img, key) => {
            const even = (key + 1) % 2 === 0;
            return (
              <>
                {even ? (
                  <div>
                    <div class="mask1" style={{ marginLeft: "50%" }}>
                      <img src={img.url} alt="" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <div class="mask">
                        <img src={img.url} alt="" />
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Image;
