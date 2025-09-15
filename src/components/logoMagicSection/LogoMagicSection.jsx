"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Reusable LogoMagicSection Component
import "./LogoMagicSection.css";

const LogoMagicSection = ({
  headingText,
  subheadingText,
  buttonText,
  buttonAction,
  imageSrc,
  imageAlt,
  discountText,
  bgImage ="/assets/img/Logodesignpagebanner.png", // ✅ new prop for background image
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="logo-magic-section"
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      <div className="logo-magic-container">
        {/* Text Section */}
        <div className="logo-magic-text" data-aos="fade-right">
          <h1>
            <span className="highlight">{headingText}</span>
          </h1>
          <p
            className="custom-white-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {subheadingText}
          </p>
          <a
            href="javascript:void(0);"
            className="magic-btn"
            onClick={buttonAction}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {buttonText}
          </a>
        </div>

        {/* Image Section */}
        <div className="logo-magic-image" data-aos="fade-left">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Discount Tab */}
        {discountText && (
          <div
            className="magic-discount-tab"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {discountText}
          </div>
        )}
      </div>
    </section>
  );
};

export default LogoMagicSection;
