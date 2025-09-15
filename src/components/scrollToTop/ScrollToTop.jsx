"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // professional icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <style jsx>{`
        .scroll-to-top-btn {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 9999;
          width: 45px;
          height: 45px;
          border-radius: 10px;
          border: none;
          background: #FF3B00;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .scroll-to-top-btn:hover {
          background: #FF3B00;
          transform: translateY(-3px);
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;
