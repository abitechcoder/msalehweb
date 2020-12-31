import React from "react";
import Slider from "./Slider";
import Image from "react-bootstrap/Image";
import OurCompany from "./OurCompany";
import Products from "./Products";

function Home() {
  return (
    <React.Fragment>
      <Slider />
      <center className="partners">
        <Image src="/images/partners.jpg" fluid />
      </center>
      <hr />
      <Products />
      <hr />
      <OurCompany />
      <hr />
    </React.Fragment>
  );
}

export default Home;
