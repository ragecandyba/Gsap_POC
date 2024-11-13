import React from "react";
import Title from "./Title";
import News from "./News";
import Svg from "./Svg";

function Brands() {
  document.title = "News";

  return (
    <>
      {/* Title animation entrance effects */}

      <Title titlename="News" />
      <News />
      <Svg />
    </>
  );
}

export default Brands;
