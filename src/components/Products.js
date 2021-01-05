import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const images = [
    "/images/p1.jpg",
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
    "/images/p5.jpg",
    "/images/p6.jpg",
    "/images/p7.jpg",
    "/images/p8.jpg",
    // "/images/p9.jpg",
    // "/images/p10.jpg",
    // "/images/p11.jpg",
    // "/images/p12.jpg",
    // "/images/p13.jpg",
    // "/images/p14.jpg",
    // "/images/p15.jpg",
    // "/images/p16.jpg",
    // "/images/p17.jpg",
    // "/images/p18.jpg",
    // "/images/p19.jpg",
    // "/images/p20.jpg",
    // "/images/p21.jpg",
    // "/images/p22.jpg",
    // "/images/p23.jpg",
    // "/images/p24.jpg",
  ];
  return (
    <div>
      <center>
        <h2>Our Products</h2>
        <hr />
      </center>
      <div className="container">
        <div className="products">
          {images.map((image, index) => {
            return (
              <div key={index} className="product">
                <img src={image} alt={"product" + index} />
              </div>
            );
          })}
        </div>
        <center id="company" className="top">
          <Link to="/products">
            <Button variant="danger">See More...</Button>
          </Link>
        </center>
      </div>
    </div>
  );
}

export default Products;
