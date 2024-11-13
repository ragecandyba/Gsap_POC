import React, { useEffect } from "react";
import Dropimage from "./Dropimage";
import Title from "./Title";
import gsap from "gsap";
// import sale from "./component/sale.jpg";

function Gallery() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".pin-windmill-svg", {
      rotateZ: 900,
    });
  });
  // eslint-disable-next-line no-lone-blocks
  {
    document.title = "Gallery";
  }
  return (
    <>
      <div style={{ width: "10%", position: "fixed", marginRight: "100px" }}>
        <img
          className="pin-windmill-svg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrB5mk-aUO-OpuLQ3i0jR7zHLAEdQ1nXdLw&usqp=CAU"
          alt="fan"
          style={{ marginLeft: "25%" }}
        />
      </div>
      {/* Title animation entrance effects */}
      <Title titlename="Gallery" />
      {/* <section id="home">
        <div class="home_page ">
          <div class="home_img ">
            <img src={sale} alt="img " />
          </div>
        </div>
      </section> */}
      <div style={{ padding: "5px" }}>
        <Dropimage />
      </div>
    </>
  );
}

export default Gallery;
