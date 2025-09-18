"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/email"; // <-- same sendEmail used
import AOS from "aos";
import "aos/dist/aos.css";

const FooterSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ✅ Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    setIsSubmitting(true);
    setFormStatus("");

    try {
      // PHP ko request bhejna
      const response = await fetch("/form-handler.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      const result = await response.json();
      console.log("Form submission response:", result);

      if (result.status === "success") {
        setFormStatus(
          "Success! Your request has been submitted. Check your email for confirmation."
        );

        reset();

        setTimeout(() => {
          setFormStatus("");
        }, 3000);
      } else {
        setFormStatus("Failed: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // Footer data
  const footerData = {
    contact: {
      email: "info@shopskey.com",
      phone: ["+61 2 6190 8616", "+44 7724 602071"],
      location: [
        "level 26/1 Bligh St, Sydney NSW 2000, Australia",
        "Office Location: 3545+58 Ipswich, United Kingdom",
      ],
    },
    services: [
      { name: "Logo Design", link: "/services/logo-designing" },
      { name: "App Development", link: "/services/app-development" },
      { name: "Web Development", link: "/services/web-development" },
      {
        name: "Custom Web Development",
        link: "/services/custom-web-development",
      },
      {
        name: "WordPress Web Development",
        link: "/services/wordpress-web-development",
      },
      {
        name: "Ecommerce Web Development",
        link: "/services/ecommerce-web-development",
      },
      {
        name: "Shopify Web Development",
        link: "/services/shopify-web-development",
      },
    ],
    socialLinks: {
      facebook: "https://www.facebook.com/shops.key3.0/",
      linkedin: "https://www.linkedin.com/company/shopskey/",
      instagram: "https://www.instagram.com/shops.key/",
    },
    footerLinks: [
      { name: "Terms & Condition", link: "/terms-and-condition" },
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Contact Us", link: "/contact-us" },
    ],
  };

  return (
    <footer className="custfooter-footer">
      <div className="custfooter-container">
        <div className="custfooter-top">
          {/* Contact */}
          <div className="custfooter-column" data-aos="fade-up">
            <h4>Contact</h4>
            <p>
              Email
              <br />
              <a href={`mailto:${footerData.contact.email}`}>
                {footerData.contact.email}
              </a>
            </p>
            <p>
              Phone
              <br />
              {footerData.contact.phone.map((phone, index) => (
                <span key={index}>
                  <a href={`tel:${phone}`}>{phone}</a>
                  <br />
                </span>
              ))}
            </p>
            <p>
              Location
              <br />
              {footerData.contact.location.map((loc, index) => (
                <span key={index}>
                  {loc}
                  <br />
                </span>
              ))}
            </p>
          </div>

          {/* Services */}
          <div
            className="custfooter-column"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4>Services</h4>
            <ul className="custfooter-list">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <Link href={service.link}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div
            className="custfooter-column"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4>Stay Connected</h4>
            <p>
              We’d love to hear from you! Reach out and let’s start building
              something great together.
            </p>

            {/* ✅ Newsletter Form with RHF */}
            <form
              className="custfooter-form"
              onSubmit={handleSubmit(onSubmit)}
              data-aos="fade-in"
            >
              <input
                type="email"
                placeholder="Your email..."
                className="huz-footer-input"
                {...register("email", { required: "Email is required" })}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <i className="fa-solid fa-spinner fa-spin"></i>
                ) : (
                  <i className="fa-solid fa-paper-plane"></i>
                )}
              </button>
            </form>

            {/* ✅ Status Message */}
            {formStatus && (
              <p
                className={`form-status ${
                  formStatus.includes("Success") ? "success" : "error"
                }`}
                data-aos="fade-in"
              >
                {formStatus}
              </p>
            )}
            {errors.email && (
              <p className="error-text" data-aos="fade-in">
                {errors.email.message}
              </p>
            )}

            {/* Social Links */}
            <div className="custfooter-social" data-aos="zoom-in">
              <a
                href={footerData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={footerData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={footerData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="custfooter-bottom" data-aos="fade-up">
          <p>
            © All Copyright 2025 by <Link href="/">Shopskey</Link>
          </p>
          <ul className="custfooter-links">
            {footerData.footerLinks.map((link, index) => (
              <li key={index}>
                {link.link.startsWith("http") ? (
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.link}>{link.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
