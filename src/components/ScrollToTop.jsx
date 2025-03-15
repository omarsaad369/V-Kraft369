import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/scrollToTop.css"; // ملف CSS لتنسيق الزر

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowButton(window.scrollY > 300); // إظهار الزر عند التمرير 300 بكسل
    });
  }, []);

  return (
    showButton && (
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
