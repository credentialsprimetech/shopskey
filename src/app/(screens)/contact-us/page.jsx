"use client";
import ContactBar from "@/components/contactBar/ContactBar";
import FormComponent from "@/components/contactForms/FormComponent";
import ContactSection from "@/components/ContactSection/ContactSection";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import MapEmbed from "@/components/mapEmbed/MapEmbed";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <HeroBanner
        title="Let's work together to accomplish great things."
        subtitle="At Shopskey, our software developers craft tailored, data‑driven solutions designed to streamline your business operations and elevate performance. Whether you're looking to automate workflows, integrate smart analytics, or build a custom product from the ground up — we’re here to make it happen."
        ctas={[
          {
            ctaLabel: "Start Your Project Today!",
            // onCtaClick: () => console.log("open chat"),
          },
          // {
          //   ctaLabel: "Learn More",
          //   ctaHref: "/learn-more",
          // },
        ]}
        bgColor="#111827"
        bgImage="https://clientproject.site/tech/images/SliderBanner.jpg"
        bgPosition="center"
        bgSize="cover"
        overlayBg="rgba(0,0,0,0.4)"
        right={
          <FormComponent
            subTitle="Book An Appointment"
            headingTitle="Do you want to make something big? Let us know as soon as possible!"
          />
        }
      />
      <ContactBar
        marginTopCheck={true}
        phone="61-2-6190-8616"
        email="info@shopskey.com"
        // liveChatLink="https://example.com/live-chat"
      />
      <MapEmbed
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.2948626068443!2d151.20967251521038!3d-33.86406998065456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d6e3ce2a1%3A0x3cdba937c83f6f14!2sLevel%2026%2F1%20Bligh%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sau!4v1722240050010!5m2!1sen!2sau"
        height="400"
        className="custom-map-style"
      />
    </>
  );
};

export default ContactUs;
