"use client";
import { useModal } from "@/app/utils/Context/ModalContext";
import AboutSection from "@/components/aboutSection/AboutSection";
import CoreValuesSection from "@/components/coreValuesSection/CoreValuesSection";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import ProjectDiscussBanner from "@/components/projectDiscussBanner/ProjectDiscussBanner";
import ProjectDiscussSection from "@/components/projectDiscussSection/ProjectDiscussSection";
import React from "react";
const coreValues = [
  {
    imgSrc: "https://www.shopskey.com/assets/img/about/Integrity.jpg",
    title: "Innovation",
    description:
      "We leverage the latest technologies to create modern, future-ready digital solutions.",
  },
  {
    imgSrc: "https://www.shopskey.com/assets/img/about/Creativity.jpg",
    title: "Client-Centric Approach",
    description:
      "Every project is built around your business goals, vision, and customer needs.",
  },
  {
    imgSrc: "https://www.shopskey.com/assets/img/about/Improvement.jpg",
    title: "Transparency",
    description:
      "Clear communication, honest feedback, and no hidden processes—just results you can trust.",
  },
  {
    imgSrc: "https://www.shopskey.com/assets/img/about/Dependable.jpg",
    title: "Quality & Performance",
    description:
      "We deliver scalable, secure, and high-performing web and app experiences every time.",
  },
];
const contactOptions = [
  {
    icon: "fas fa-phone-volume",
    title: "Call Us",
    description: "844-243-4219",
  },
  {
    icon: "fas fa-comments",
    title: "Chat Live",
    description: "To discuss your project",
  },
];
const content = {
  title: "Driven by Innovation, Focused on Your Digital Success",
  paragraph:
    "We're more than just a web and app development company. We're your digital growth partner. The Shopskey team is passionate about building powerful, user-friendly digital products that help businesses scale. With a focus on innovation, quality, and transparency, we ensure each solution is customized to meet your unique goals. From startups to enterprises, we bring a client-first approach backed by technical expertise and creative thinking. We don't just deliver projects, we build long-term value through performance-driven solutions. When you work with Shopskey, you gain a team committed to your success in the ever-evolving digital landscape.",
  topImgSrc: "https://www.shopskey.com/images/about-image1.png",
  topImgAlt: "VR Woman",

};
const content2 = {
  bottomImgSrc: "https://www.shopskey.com/images/about-image2.png",
  bottomImgAlt: "Robot with Laptop",
  whyChooseSubheading: "Why Choose Shopskey",
  whyChooseParagraph:
    "Shopskey believes that great digital experiences begin with a deep understanding of your unique goals. Combining technical expertise with creative thinking, we craft web and app solutions that are visually stunning, scalable, secure, and built for performance. We don't just build websites or apps. We build tools that solve problems, streamline operations, and drive measurable results. With a client-first approach, transparent communication, and an unwavering commitment to quality, Shopskey is the partner you can rely on to bring your digital vision to life.",
  mission:
    "To empower businesses of all sizes by delivering smart, scalable, and user-focused web and app development solutions that create lasting digital impact.",
  vision:
    "To become a globally recognized digital solutions company known for innovation, quality, and helping businesses grow through meaningful technology.",

};
const AboutPage = () => {
    const { toggleModal } = useModal();
  
  return (
    <>
      <HeroBanner
        title="Web and App Development That Transforms Businesses"
        subtitle="We create powerful web and app solutions that drive growth, innovation, and digital success.

"
        ctas={[
          {
            ctaLabel: "Get a free Quote",
            onCtaClick: () => toggleModal(), // Open modal on click
          },
          {
            ctaLabel: "live Chat",
            // onCtaClick: () => console.log("open chat2"),
            ctaStyle: "work-btn",
          },
        ]}
        bgColor="#111827"
        bgImage="/assets/img/about-banner011.png"
        bgPosition="center"
        bgSize="cover"
        overlayBg="rgba(0,0,0,0.4)"
        turstImage={true}
      />
      <CoreValuesSection values={coreValues} />
      <ProjectDiscussBanner
        title="Ready to discuss your Project?"
        contactOptions={contactOptions}
      />
      <div>
        {/* Left-to-Right layout */}
        <AboutSection {...content} layoutDirection="ltr" />
        <AboutSection {...content2} layoutDirection="rtl" />

        {/* Right-to-Left layout */}
        {/* <AboutSection {...content} layoutDirection="rtl" /> */}
      </div>
      <ProjectDiscussSection heading="We'are ready!" description="Have a Project To Discuss?"/>
    </>
  );
};

export default AboutPage;
