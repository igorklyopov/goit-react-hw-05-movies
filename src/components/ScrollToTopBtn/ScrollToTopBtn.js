import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import StylesScrollToTopBtn from "./StylesScrollToTopBtn";

export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const classes = StylesScrollToTopBtn();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          type="button"
          className={`button ${classes.scrollToTopBtn}`}
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </button>
      )}
    </>
  );
}
