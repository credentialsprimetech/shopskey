"use client";

import React from "react";
import ContactForm from "../contactForms/ContactForm";
import "./ContactSection.css";
const ContactSection = () => {
  return (
    <section className="contact-section-unique">
      <div className="contact-container">
        {/* LEFT: Description & Info */}
        <div className="contact-text">
          <h1>
            Let's work together to <br />
            <span>accomplish great things.</span>
          </h1>

          <p className="uniqclcontact-description">
            At Shopskey, our software developers craft tailored, data-driven
            solutions designed to streamline your business operations and
            elevate performance. Whether you're looking to automate workflows,
            integrate smart analytics, or build a custom product from the ground
            up — we’re here to make it happen.
            <br />
            <br />
            We believe in collaboration from day one: after you submit a
            message, you’ll receive a thoughtful response within 24 hours
            (business hours). Let us help you transform your ideas into
            reality—get in touch today, and let's create something exceptional
            together.
          </p>

          {/* Social Icons */}
          <div className="contact-left-social">
            <a href="javascript:void(0);" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="javascript:void(0);" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="javascript:void(0);" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="javascript:void(0);" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="contact-form">
          <h2>Book An Appointment</h2>
          <p className="subtitle">
            Do you want to make something big? Let us know as soon as possible!
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
