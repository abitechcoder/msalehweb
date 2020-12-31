import React from "react";
import Image from "react-bootstrap/Image";
import "./ProductsPage.css";

function ProductsPage() {
  const images = [
    "/images/p1.jpg",
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/p4.jpg",
    "/images/p5.jpg",
    "/images/p6.jpg",
    "/images/p7.jpg",
    "/images/p8.jpg",
    "/images/p9.jpg",
    "/images/p10.jpg",
    "/images/p11.jpg",
    "/images/p12.jpg",
    "/images/p13.jpg",
    "/images/p14.jpg",
    "/images/p15.jpg",
    "/images/p16.jpg",
    "/images/p17.jpg",
    "/images/p18.jpg",
    "/images/p19.jpg",
    "/images/p20.jpg",
    "/images/p21.jpg",
    "/images/p22.jpg",
    "/images/p23.jpg",
    "/images/p24.jpg",
  ];

  return (
    <div className="top-M">
      <div className="top-Img">
        <Image id="about_img" src="/images/banner3.jpg" fluid />
        <div className="centered">
          <h1 className="prods_header">&#8610; OUR PRODUCTS &#8611;</h1>
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default ProductsPage;
