"use client";
import { useModal } from "@/app/utils/Context/ModalContext";
import CaseStudiesSection from "@/components/caseStudiesSection/CaseStudiesSection";
import SlideCarousel from "@/components/caseStudyCarousel/CaseStudyCarousel";
import FaqSection from "@/components/faqSection/FaqSection";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import LogoCarousel from "@/components/logoMarquee/LogoMarquee";
import PartnerBrands from "@/components/partnerBrands/PartnerBrands";
import ProcessSection from "@/components/processSection/ProcessSection";
import ProjectDiscussSection from "@/components/projectDiscussSection/ProjectDiscussSection";
import ReviewsSection from "@/components/reviewsSection/ReviewsSection";
import SectCount1 from "@/components/sectCount1/SectCount1";
import ServicesSection from "@/components/servicesSection/ServicesSection";
import WebAgency1 from "@/components/webAgency1/WebAgency1";
import React from "react";
const logos = [
  "/assets/img/Logo1.svg",
  "/assets/img/Logo2.svg",
  "/assets/img/Logo3.svg",
  "/assets/img/Logo4.svg",
  "/assets/img/Logo5.svg",
  "/assets/img/Logo6.svg",
  "/assets/img/Logo7.svg",
  "/assets/img/Logo8.svg",
  "/assets/img/Logo9.svg",
];
const servicesData = [
  {
    image: "/assets/img/logo-design.jpg",
    title: "Logo Design",
    text: "Stand out with a custom-designed logo tailored to your vision. Professional, memorable, and built to represent you.",
  },
  {
    image: "/assets/img/digital-marketing.jpg",
    title: "Digital Marketing",
    text: "Grow your brand with smart, results-driven digital marketing. From strategy to success, we’ve got you covered.",
  },
  {
    image: "/assets/img/App-development.jpg",
    title: "Web Development",
    text: "Your business needs more than a website, it needs results. Custom web development built to grow with you.",
  },
];
const caseStudiesData = [
  {
    image: "/images/caseStudies/image-8-vic-expert-cleaning.png",
    alt: "vic-expert-cleaning",
    title: "Professional Cleaning Services in Victoria",
    description:
      "Vic Expert Cleaning delivers top-quality residential and commercial cleaning solutions with a commitment to hygiene, reliability, and customer satisfaction.",
    logo: "/images/caseStudies/logo/image-8-vic-expert-cleaning.png",
    logoLink: "https://vicexpertcleaning.com/",
    projectUrl: "https://vicexpertcleaning.com/",
    marginTopChecking: true,
  },
  {
    image: "/images/caseStudies/image-6-vice-expert-painting.png",
    alt: "vic-expert-paint-decor",
    title: "Expert Painting & Decorating Services",
    description:
      "Vic Expert Paint & Decor transforms homes and businesses with professional painting, decorating, and finishing services across Australia.",
    logo: "/images/caseStudies/logo/image-6-vice-expert-painting.png",
    logoLink: "https://vicexpertpaintndecor.com.au/",
    projectUrl: "https://vicexpertpaintndecor.com.au/",
    // marginTopChecking: "",
  },
  {
    image: "/images/caseStudies/image-5-our-care-home-health.png",
    alt: "our-care-home-health",
    title: "Compassionate Home Health Care",
    description:
      "Our Care Home Health provides personalized medical and non-medical home health services that ensure comfort, dignity, and wellness for every patient.",
    logo: "/images/caseStudies/logo/image-5-our-care-home-health.png",
    logoLink: "https://ourcarehomehealth.com/",
    projectUrl: "https://ourcarehomehealth.com/",
    marginTopChecking: true,
  },
  {
    image: "/images/caseStudies/image-7-maxine-wilson.png",
    alt: "maxine-wilson",
    title: "The Voice Behind The Homeless Prince",
    description:
      "A journey shaped by resilience, love, and truth — Maxine Wilson shares stories that inspire courage and hope.",
    logo: "/images/caseStudies/logo/image-7-maxine-wilson.png",
    logoLink: "https://maxinewilson.com/",
    projectUrl: "https://maxinewilson.com/",
  },
  {
    image: "/images/caseStudies/image-3-our-care-case-study.jpg",
    alt: "our-care-hospice",
    title: "Dignified Hospice & Palliative Care",
    description:
      "Our Care Hospice supports patients and families with compassion, dignity, and specialized care through life’s most sensitive journey.",
    logo: "/images/caseStudies/logo/image-3-our-care-case-study.png",
    logoLink: "https://ourcarehospice.com/",
    projectUrl: "https://ourcarehospice.com/",
    marginTopChecking: true,
  },
  {
    image: "/images/caseStudies/image-1-hospice-of-gentle-care.png",
    alt: "hospice-of-gentle-care",
    title: "Gentle & Compassionate Hospice Care",
    description:
      "Hospice of Gentle Care is dedicated to providing comfort, respect, and support for patients and their loved ones during end-of-life care.",
    logo: "/images/caseStudies/logo/image-1-hospice-of-gentle-care.png",
    logoLink: "https://hospiceofgentlecare.com/",
    projectUrl: "https://hospiceofgentlecare.com/",
  },
  {
    image: "/images/caseStudies/image-2-latzi-floors-case-study.png",
    alt: "latzi-floors",
    title: "Premium Flooring Solutions in Australia",
    description:
      "Latzi Floors specializes in high-quality timber, laminate, and hybrid flooring, offering durable and stylish solutions for homes and businesses.",
    logo: "/images/caseStudies/logo/image-2-latzi-floors-case-study.png",
    logoLink: "https://www.latzifloors.com.au/",
    projectUrl: "https://www.latzifloors.com.au/",
    marginTopChecking: true,
  },
  {
    image: "/images/caseStudies/image-4-villa-sunset-waters.png",
    alt: "villa-sunset-waters",
    title: "Experience Bali at Villa Sunset Waters",
    description:
      "A modern three-bedroom villa with a private pool, steps away from beaches, shops, and restaurants in beautiful Bali.",
    logo: "/images/caseStudies/logo/image-4-villa-sunset-waters.png",
    logoLink: "https://villasunsetwaters.com/",
    projectUrl: "https://villasunsetwaters.com/",
  },
];

const Partherlogos = [
  { src: "/images/Optic-Gaming.png", alt: "Optic-Gaming" },
  { src: "/images/LYFE.png", alt: "LYFE" },
  { src: "/images/Universal.png", alt: "Universal" },
  { src: "/images/Optic-Gaming.png", alt: "Optic Gaming" },
  { src: "/images/CareTech.png", alt: "CareTech" },
  { src: "/images/Boost.png", alt: "Boost" },
  { src: "/images/Channel-4.png", alt: "Channel 4" },
];
const processStages = [
  {
    number: "01/06",
    title: "Ideation",
    desc: "We discuss your goals, define requirements, and create a project roadmap with timelines and technologies.",
    image: "/images/Ideate.jpg",
  },
  {
    number: "02/06",
    title: "Design",
    desc: "Shopskey designs responsive wireframes and prototypes, refining them based on your feedback for optimal user experience.",
    image: "/images/Design-2.jpg",
  },
  {
    number: "03/06",
    title: "Development",
    desc: "Our team builds custom websites or apps using agile methods, ensuring scalability, security, and performance.",
    image: "/images/Development.jpg",
  },
  {
    number: "04/06",
    title: "Testing",
    desc: "We conduct thorough testing for functionality, usability, and compatibility to deliver a flawless product.",
    image: "/images/Testing.jpg",
  },
  {
    number: "05/06",
    title: "Deployment",
    desc: "Shopskey launches your website or app, handling server setup and app store submissions for a smooth rollout.",
    image: "/images/Maintenance.jpg",
  },
  //   {
  //     number: "06/06",
  //     title: "Maintenance",
  //     desc: "We provide ongoing updates and support to keep your platform secure and aligned with your needs.",
  //     image:
  //       "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=400&h=400&fit=crop&crop=center",
  //   },
];
const HomePage = () => {
  const { toggleModal } = useModal();

  return (
    <>
      <HeroBanner
        title="Leading Web & App Development Services"
        subtitle="Looking to expand online or launch a new app? Shopskey designs custom websites and powerful mobile applications designed to boost your brand and effectively reach your customers. We turn your ideas into digital realities that drive results."
        ctas={[
          {
            ctaLabel: "Start Your Project Today!",
            onCtaClick: () => toggleModal(),
          },
          // {
          //   ctaLabel: "Learn More",
          //   ctaHref: "/learn-more",
          // },
        ]}
        bgColor="#111827"
        bgImage="/images/SliderBanner.jpg"
        bgPosition="center"
        bgSize="cover"
        overlayBg="rgba(0,0,0,0.4)"
      />

      <LogoCarousel
        logos={logos}
        logoWidth={200}
        height={100}
        gap={24}
        speedSec={15}
        bgColor="#ffffff"
      />
      <ServicesSection
        heading="Our Core Services"
        description="We delivers web and app solutions designed to empower your business and establish a strong online presence."
        services={servicesData}
      />
      <CaseStudiesSection caseStudies={caseStudiesData} />
      <ProcessSection
        heading="Web and App Development Process"
        subheading="At Shopskey, we follow a streamlined process to deliver tailored web and app solutions. Here's our concise development process"
        ctaLabel="Learn More"
        ctaLink="/process"
        stages={processStages}
      />
      <PartnerBrands
        highlight="Industries"
        titleSuffix=" we serve"
        logos={Partherlogos}
        // optional:
        highlightColor="#FC501B"
        headingColor="#000"
        // grayscale={true}
        columns="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        // className="bg-white"
      />
      <SlideCarousel />
      <SectCount1 />
      <WebAgency1 />
      <ReviewsSection />
      <FaqSection />
      <ProjectDiscussSection />
    </>
  );
};

export default HomePage;
