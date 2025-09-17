"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import { useModal } from "@/app/utils/Context/ModalContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { toggleModal } = useModal();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".mobile-header")) {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const serviceLinks = [
    { href: "/services/logo-designing", title: "Logo Design" },
    { href: "/services/digital-marketing", title: "Digital Marketing" },
    { href: "/services/app-development", title: "App Development" },
    { href: "/services/ios-app-development", title: "iOS App Development" },
    {
      href: "/services/android-app-development",
      title: "Android App Development",
    },
    {
      href: "/services/flutter-app-development",
      title: "Flutter App Development",
    },
    { href: "/services/web-development", title: "Web Development" },
    {
      href: "/services/custom-web-development",
      title: "Custom Web Development",
    },
    {
      href: "/services/wordpress-web-development",
      title: "WordPress Web Development",
    },
    {
      href: "/services/ecommerce-web-development",
      title: "Ecommerce Web Development",
    },
    {
      href: "/services/shopify-web-development",
      title: "Shopify Web Development",
    },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="cstmunih-header-wrapper">
        {/* Navbar */}
        <div className="cstmunih-navbar">
          <div className="cstmunih-container">
            {/* Logo */}
            <div className="cstmunih-logo">
              <Link href="/">
                <Image
                  src="/assets/img/logo/white-logo.png"
                  alt="Logo"
                  width={200}
                  height={100}
                  style={{ height: "auto", width: "auto" }}
                  priority
                />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="cstmunih-nav">
              <ul className="cstmunih-nav-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li className="cstmunih-dropdown">
                  <Link href="#">
                    Services <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="cstmunih-dropdown-menu">
                    {serviceLinks.map((service, index) => (
                      <li key={index}>
                        <Link href={service.href}>{service.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </nav>

            {/* CTA */}
            <div className="cstmunih-cta">
              <Link href="/contact-us" className="cstmunih-contact-btn">
                Contact Us
              </Link>
              <button onClick={toggleModal} className="cstmunih-icon-circle">
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="mobile-header">
        <div className="mobile-header-container">
          <div className="mobile-logo">
            <Link href="/">
              <Image
                src="/assets/img/logo/white-logo.png"
                alt="Shopskey Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        {/* Mobile Nav */}
        <nav
          className={`mobile-nav mob-nav ${isMobileMenuOpen ? "active" : ""}`}
        >
          <ul className="mob-nav-list">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>

            {/* Services with dropdown */}
            <li className="mob-dropdown">
              <button
                className="mob-dropdown-toggle"
                aria-expanded={isServicesOpen}
                onClick={toggleServicesDropdown}
              >
                Services{" "}
                <span
                  className={`mob-dropdown-icon ${
                    isServicesOpen ? "rotated" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <ul className={`mob-submenu ${isServicesOpen ? "active" : ""}`}>
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
