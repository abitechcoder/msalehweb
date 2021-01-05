import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import "./ScrollTopBtn.css";

function ScrollTopBtn() {
  // kick off the polyfill!
  smoothscroll.polyfill();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="scroll-to-top" onClick={scrollToTop}>
      <i className="material-icons icon">expand_less</i>
    </div>
  );
}

export default ScrollTopBtn;
