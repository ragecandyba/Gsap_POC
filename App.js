import Component1 from "./Background";
// import Component2 from "./Component2";
// import Gsapcircle from "./Gsapcircle";
// import ScrollingText from "./ScrollingText";
// import Title from "./Title";
import "./App.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import { useRef } from "react";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import ScrollTriggerProxy from "./ScrollTriggerProxy";
// import Shop from "./anime";
// import Image from "./Image";
// import Dropimage from "./Dropimage";
// import Carousel from "./Carousel";
import UmbrellaSlider from "./CurvedCarouselmain";
// import Animeindex from "./Animeindex";
import Navbar from "./component/Navbartop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Aboutus";
import Gallery from "./Gallery";
// import Try from "./Try";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
// import Form from "./Form";
import Brands from "./Brands";
// import Mohit from "./Mohit";

function App() {
  // const containerRef = useRef(null);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="*" element={<UmbrellaSlider />}></Route>
          <Route path="/home" element={<UmbrellaSlider />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/products" element={<Component1 />}></Route>
          <Route path="/news" element={<Brands />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
