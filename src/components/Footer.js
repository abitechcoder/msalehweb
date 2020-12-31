import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="other__items">
            <h1>dddddd</h1>
            <p>This is a text</p>
            <p>This is a text</p>
            <p>This is a text</p>
            <p>This is a text</p>
            <p>This is a text</p>
            <p>This is a text</p>
            <p>This is a text</p>
            <p>This is a text</p>
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
