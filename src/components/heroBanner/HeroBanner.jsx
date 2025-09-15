"use client";

import Link from "next/link";
import { useCallback, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroBanner({
  title = "Leading Web & App Development Services",
  subtitle = `Looking to expand online or launch a new app? Shopskey designs custom websites and powerful mobile applications designed to boost your brand and effectively reach your customers. We turn your ideas into digital realities that drive results.`,
  ctas = [],
  right = null,
  ariaLabel,
  bgColor = "#0d1b2a",
  bgImage,
  bgSize = "cover",
  bgPosition = "center",
  bgRepeat = "no-repeat",
  overlayBg = "rgba(0,0,0,0.45)",
  textColor = "#ffffff",
  style,
  sectionProps = {},
  turstImage = false,
}) {
  // ✅ Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleCtaClick = useCallback((e, onCtaClick) => {
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    if (typeof window !== "undefined") {
      if (typeof window.openZendeskChat === "function") {
        try {
          window.openZendeskChat();
          return;
        } catch {}
      }
      if (typeof window.zE === "function") {
        try {
          window.zE("webWidget", "open");
          return;
        } catch {}
      }
      console.warn(
        "CTA clicked. Provide onCtaClick, ctaHref, or define window.openZendeskChat()."
      );
    }
  }, []);

  const Cta = ({ ctaLabel, ctaHref, onCtaClick, ctaStyle }) => {
    if (ctaHref) {
      const isInternal = ctaHref.startsWith("/");
      if (isInternal) {
        return (
          <Link href={ctaHref} className={`about-us-btn ${ctaStyle}`}>
            {ctaLabel}
          </Link>
        );
      }
      return (
        <a href={ctaHref} className={`about-us-btn ${ctaStyle}`}>
          {ctaLabel}
        </a>
      );
    }
    return (
      <button
        type="button"
        className={`home-top-banner-btn ${ctaStyle}`}
        onClick={(e) => handleCtaClick(e, onCtaClick)}
      >
        {ctaLabel}
      </button>
    );
  };

  const sectionStyle = {
    backgroundColor: bgColor,
    backgroundImage: bgImage ? `url("${bgImage}")` : undefined,
    backgroundSize: bgSize,
    backgroundPosition: bgPosition,
    backgroundRepeat: bgRepeat,
    color: textColor,
    paddingTop: "0",
    paddingBottom: "0",
    position: "relative",
    ...(style || {}),
  };

  return (
    <section
      className="home-top-banner-section"
      aria-label={
        ariaLabel ?? (typeof title === "string" ? title : "Top banner")
      }
      style={sectionStyle}
      {...sectionProps}
    >
      <div
        className="home-top-banner-overlay"
        style={
          overlayBg
            ? {
                background: overlayBg,
                paddingTop: "15vh",
                paddingBottom: "15vh",
              }
            : undefined
        }
      >
        <div className="home-top-banner-container">
          <div className="home-top-banner-row">
            <div
              className="home-top-banner-left"
              data-aos="fade-right" // 👈 AOS animation
            >
              <h1 className="home-top-banner-heading">{title}</h1>
              {subtitle && (
                <p
                  className="home-top-banner-subheading"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {subtitle}
                </p>
              )}
              <div
                className="home-top-banner-buttons"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                {ctas.map((cta, index) => (
                  <Cta
                    key={index}
                    ctaLabel={cta.ctaLabel}
                    ctaHref={cta.ctaHref}
                    onCtaClick={cta.onCtaClick}
                    ctaStyle={cta.ctaStyle || "talk-btn"}
                  />
                ))}
              </div>
              {turstImage && (
                <div
                  className="about-us-trust"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span>Highly Recommended & Trusted By</span>
                  <div className="about-us-logos">
                    <img
                      src="https://www.shopskey.com/assets/img/rating.png"
                      alt="Google Partner"
                    />
                  </div>
                </div>
              )}
            </div>
            <div
              className="home-top-banner-right"
              data-aos="fade-left" // 👈 AOS animation
            >
              {right}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
