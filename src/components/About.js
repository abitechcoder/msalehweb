import React from "react";
import Image from "react-bootstrap/Image";
import "./About.css";

function About() {
  return (
    <div className="top-M">
      <div className="top-Img">
        <Image id="about_img" src="/images/banner3.jpg" fluid />
        <div className="centered">
          <h1>&#8610; ABOUT US &#8611;</h1>
        </div>
      </div>
      <div className="container about_txt">
        <p>
          <b>M. SALEH & COMPANY LIMITED</b> was incorporated since 1957 and has
          over 50 years experience in assembling Power generating sets and
          manufacturing of acoustic enclosures. We also deal in water pumps,
          transformers, tractors, steel fabrication, construction equipment and
          run a state of the art machine shop. Even in the different economic
          terrain of Nigeria, where people have become Sale-Shrewd and Vendor
          Suspicious, our interest, is not about moving a potential client from
          critics' corner to the cash-register line; but to give variety and the
          best there is, so you can have a choice based on good judgement.
        </p>
        <p>
          We have developed strong relationship and expertise in conjunction
          with best-in-class industrial sources e.g. Perkins, Cummins,
          Caterpillar, Volvo, Lister, Deutz, Doorman, Scania, Iveco, John Deer
          and others with 24 - hours service support. We pride ourselves as the
          only company in Nigeria that can offer you this variety at a
          competitive price.
        </p>
        <p>
          We offer reliable products and dependable service back-up. All these
          and more, make-up the competitive differential advantages that have
          become synonymous with M.Saleh.
        </p>
      </div>
    </div>
  );
}

export default About;
