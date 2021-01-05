import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import "./Footer.css";

function Footer() {
  // kick off the polyfill!
  smoothscroll.polyfill();
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="other__items">
            <div className="left_content">
              <h2 className="link_head">Company</h2>
              <p className="link_text">
                <HashLink smooth to="./#company">
                  About Us
                </HashLink>
              </p>
              <p className="link_text">
                <HashLink smooth to="./#products">
                  Our Products
                </HashLink>
              </p>
            </div>
            <div className="right_content">
              <h2 className="right_link_head">
                <Link to="/contact">Contact Us</Link>
              </h2>
              <h2 className="right_link_head">
                <Link to="/products">Products</Link>
              </h2>
              <h2 className="right_link_head">
                <Link to="/about">About Us</Link>
              </h2>
            </div>
          </div>

          <div className="working__hours">
            <div className="line__left">
              <h1>Working hours</h1>
              <p>You can contact or visit us during working time</p>
              <div className="group">
                <p>Phone:</p>
                <p>0803 310 2102</p>
              </div>
              <div className="group">
                <p>Email:</p>
                <p>nabil@msalehgroup.com</p>
              </div>
              <div className="group">
                <p>Working Hours:</p>
                <div>
                  <p>Mondays to Fridays 8:00 am to 5:00 pm</p>
                  <p>Saturdays 8:00 am to 1:30 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
