import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // kick off the polyfill!
  smoothscroll.polyfill();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
