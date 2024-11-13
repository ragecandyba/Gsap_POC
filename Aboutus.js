import React from "react";
import Gsapcircle from "./Gsapcircle";
import Title from "./Title";

function About() {
  // eslint-disable-next-line no-lone-blocks
  {
    document.title = "About Us";
  }
  return (
    <>
      {/* Title animation entrance effects */}

      <Title titlename="About Us" />
      <section id="home">
        <div class="home_page ">
          <div class="home_img ">
            <img
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2022/09/Newsroom-About.jpg?w=2048"
              alt="img "
            />
          </div>
        </div>
      </section>

      <div
        style={{
          margin: "auto",
          width: "80%",
          marginTop: "50px",
        }}
      >
        <p style={{ fontSize: "20px" }}>
          At XYZ, we believe that every moment is a work of art waiting to be
          captured. Our passion for photography drives us to immortalize the
          beauty, emotions, and stories that unfold in the world around us. With
          an unrelenting commitment to quality and creativity, we specialize in
          turning your cherished memories into stunning visual masterpieces.
          Whether it's the joy of a wedding day, the elegance of a corporate
          event, the personality of a portrait, or the breathtaking scenes of
          nature, we are dedicated to preserving these moments through the lens
          of our cameras. Explore our portfolio and let us bring your unique
          narrative to life, one frame at a time.
        </p>
      </div>
      <div
        style={{
          margin: "auto",
          width: "95%",
          marginTop: "50px",
        }}
      >
        <h1>What makes us different</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            marginBottom: "50px",
            marginLeft: "130px",
            marginTop: "50px",
          }}
        >
          <div
            className="col-sm-4"
            style={{ border: "2px solid", padding: "5px" }}
          >
            <i
              class="bi bi-brush-fill"
              style={{ fontSize: "40px", color: "#ff5e14" }}
            ></i>
            <p style={{ fontWeight: "600", fontSize: "20px" }}>BRANDING</p>
            <p style={{ fontStyle: "italic" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button
              name="More"
              style={{ backgroundColor: "#ff5e14", borderRadius: "10px" }}
            >
              More
            </button>
          </div>
          <div
            className="col-sm-4"
            style={{ marginLeft: "15px", border: "2px solid", padding: "5px" }}
          >
            <i
              class="bi bi-printer-fill"
              style={{ fontSize: "40px", color: "#ff5e14" }}
            ></i>
            <p style={{ fontWeight: "600", fontSize: "20px" }}>PRINT</p>
            <p style={{ fontStyle: "italic" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button
              name="More"
              style={{ backgroundColor: "#ff5e14", borderRadius: "10px" }}
            >
              More
            </button>
          </div>
          <div
            className="col-sm-4"
            style={{ marginLeft: "15px", border: "2px solid", padding: "5px" }}
          >
            <i
              class="bi bi-tv-fill"
              style={{ fontSize: "40px", color: "#ff5e14" }}
            ></i>
            <p style={{ fontWeight: "600", fontSize: "20px" }}>DIGITAL</p>
            <p style={{ fontStyle: "italic" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button
              name="More"
              style={{ backgroundColor: "#ff5e14", borderRadius: "10px" }}
            >
              More
            </button>
          </div>
        </div>
      </div>

      <Gsapcircle />
    </>
  );
}

export default About;
