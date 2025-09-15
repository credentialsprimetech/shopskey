"use client";
import BrandSection from "@/components/brandSection/BrandSection";
import ContactBar from "@/components/contactBar/ContactBar";
import LogoDesignForm from "@/components/contactForms/LogoDesignForm";
import LogoDesignSection from "@/components/logoDesignSection/LogoDesignSection";
import LogoDesignServices from "@/components/logoDesignServices/LogoDesignServices";
import LogoMagicSection from "@/components/logoMagicSection/LogoMagicSection";
import LogoReviewSection from "@/components/logoReviewSection/LogoReviewSection";
import PortfolioGrid from "@/components/portfolioGrid/PortfolioGrid";
import ThirdContentSection from "@/components/thirdContentSection/ThirdContentSection";
import React from "react";
const reviews = [
  {
    platformName: "Google",
    rating: "4.9",
    imageSrc: "",
    imageAlt: "",
  },
  {
    platformName: "Trustpilot",
    rating: "★★★★★",
    imageSrc: "",
    imageAlt: "",
  },
  {
    platformName: "Clutch",
    rating: "4.9/5.0 ★★★★★",
    imageSrc: "",
    imageAlt: "",
  },
  {
    platformName: "Inc5000",
    rating: "",
    imageSrc: "//images/Inc5000.png",
    imageAlt: "Inc5000",
  },
];

const paragraphs = [
  "As a premier Android app development company, we are committed to crafting innovative, secure, and scalable mobile solutions that perfectly align with your business goals. Shopskey developers leverage the latest technologies and industry best practices to build apps that provide seamless user experiences and drive engagement.",

  "Whether you need a simple app or a complex enterprise solution, we deliver quality results on time and within budget. With a strong focus on customer satisfaction, we guide you through every step, from concept to launch and beyond, ensuring your app stands out in the competitive market.",
];
const sectionItems = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2329/2329120.png",
    title: "24/7 Dedicated Support",
    description:
      "Our team provides round-the-clock support, promptly addressing your queries on logo design, web, and app development for seamless project success.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    title: "Proven Excellence",
    description:
      "Our experienced team delivers high-quality logo designs, marketing strategies, and web/app solutions, earning trust through consistent, reliable project success.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    title: "Client-Centric Focus",
    description:
      "We prioritize your success through transparent communication and close collaboration, delivering web, app, and marketing solutions that exceed expectations.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4379/4379513.png",
    title: "100% Satisfaction Commitment",
    description:
      "We guarantee your vision comes to life with expertly crafted logos, websites, and apps, ensuring results that meet your expectations.",
  },
];
const tabs = [
  { name: "abstract", label: "ABSTRACT" },
  { name: "3d", label: "3D" },
  { name: "animated", label: "ANIMATED" },
  { name: "iconic", label: "ICONIC" },
  { name: "illustrative", label: "ILLUSTRATIVE" },
  { name: "mascot", label: "MASCOT" },
  { name: "typography", label: "TYPOGRAPHY" },
];

const tabContents = {
  abstract: [
    {
      imgSrc: "/images/autorent-rent-service.webp",
      alt: "Autorent Rent Service Logo",
      name: "Autorent Rent Service",
    },
    {
      imgSrc: "/images/dawn-fresh.webp",
      alt: "Dawn Fresh Logo",
      name: "Dawn Fresh",
    },
    { imgSrc: "/images/everest.webp", alt: "Everest Logo", name: "Everest" },
    {
      imgSrc: "/images/homescape.webp",
      alt: "Homescape Logo",
      name: "Homescape",
    },
    { imgSrc: "/images/profar.webp", alt: "Profar Logo", name: "Profar" },
    { imgSrc: "/images/linkloom.webp", alt: "Linkloom Logo", name: "Linkloom" },
    { imgSrc: "/images/outgood.webp", alt: "Outgood Logo", name: "Outgood" },
    { imgSrc: "/images/pixelop.webp", alt: "Pixelop Logo", name: "Pixelop" },
  ],
  "3d": [
    {
      imgSrc: "/images/aldenaire-abstract.webp",
      alt: "Aldenaire Abstract Logo",
      name: "Aldenaire Abstract",
    },
    {
      imgSrc: "/images/brigitte-creative.webp",
      alt: "Brigitte Creative Logo",
      name: "Brigitte Creative",
    },
    {
      imgSrc: "/images/communication.webp",
      alt: "Communication Logo",
      name: "Communication",
    },
    {
      imgSrc: "/images/elite-call.webp",
      alt: "Elite Call Logo",
      name: "Elite Call",
    },
    {
      imgSrc: "/images/fied-active.webp",
      alt: "Fied Active Logo",
      name: "Fied Active",
    },
    {
      imgSrc: "/images/shaki-cctv-camera-servicing.webp",
      alt: "Shaki CCTV Camera Servicing Logo",
      name: "Shaki CCTV Camera Servicing",
    },
    {
      imgSrc: "/images/techlunch.webp",
      alt: "TechLunch Logo",
      name: "TechLunch",
    },
    { imgSrc: "/images/vortex.webp", alt: "Vortex Logo", name: "Vortex" },
  ],
  animated: [
    {
      imgSrc: "/images/autopilot.gif",
      alt: "Autopilot Logo",
      name: "Autopilot",
    },
    {
      imgSrc: "/images/billiards.gif",
      alt: "Billiards Logo",
      name: "Billiards",
    },
    { imgSrc: "/images/dare.gif", alt: "Dare Logo", name: "Dare" },
    { imgSrc: "/images/duo-inc.gif", alt: "Duo Inc Logo", name: "Duo Inc" },
    { imgSrc: "/images/express.gif", alt: "Express Logo", name: "Express" },
    { imgSrc: "/images/lab.gif", alt: "Lab Logo", name: "Lab" },
    { imgSrc: "/images/tak.gif", alt: "Tak Logo", name: "Tak" },
    { imgSrc: "/images/tekni.gif", alt: "Tekni Logo", name: "Tekni" },
  ],
  iconic: [
    { imgSrc: "/images/coicub.webp", alt: "Coicub Logo", name: "Coicub" },
    {
      imgSrc: "/images/cool-chatters.webp",
      alt: "Cool Chatters Logo",
      name: "Cool Chatters",
    },
    { imgSrc: "/images/drouix.webp", alt: "Drouix Logo", name: "Drouix" },
    { imgSrc: "/images/everest.webp", alt: "Everest Logo", name: "Everest" },
    { imgSrc: "/images/faicon.webp", alt: "Faicon Logo", name: "Faicon" },
    { imgSrc: "/images/nicoin.webp", alt: "Nicoin Logo", name: "Nicoin" },
    { imgSrc: "/images/nontect.webp", alt: "Nontect Logo", name: "Nontect" },
    {
      imgSrc: "/images/star-travel.webp",
      alt: "Star Travel Logo",
      name: "Star Travel",
    },
  ],
  illustrative: [
    {
      imgSrc: "/images/brainbox-design-studio.webp",
      alt: "Brainbox Design Studio Logo",
      name: "Brainbox Design Studio",
    },
    {
      imgSrc: "/images/brocelle-catering.webp",
      alt: "Brocelle Catering Logo",
      name: "Brocelle Catering",
    },
    {
      imgSrc: "/images/forest-to-fork.webp",
      alt: "Forest to Fork Logo",
      name: "Forest to Fork",
    },
    { imgSrc: "/images/frix.webp", alt: "Frix Logo", name: "Frix" },
    {
      imgSrc: "/images/illustration-logo.webp",
      alt: "Illustration Logo",
      name: "Illustration Logo",
    },
    {
      imgSrc: "/images/master-chef.webp",
      alt: "Master Chef Logo",
      name: "Master Chef",
    },
    { imgSrc: "/images/pizza.webp", alt: "Pizza Logo", name: "Pizza" },
    {
      imgSrc: "/images/summer-holiday.webp",
      alt: "Summer Holiday Logo",
      name: "Summer Holiday",
    },
  ],
  mascot: [
    {
      imgSrc: "/images/lions-monster.webp",
      alt: "Lions Monster Logo",
      name: "Lions Monster",
    },
    { imgSrc: "/images/lions.webp", alt: "Lions Logo", name: "Lions" },
    {
      imgSrc: "/images/rig-wizards.webp",
      alt: "Rig Wizards Logo",
      name: "Rig Wizards",
    },
    {
      imgSrc: "/images/samurai-rodster.webp",
      alt: "Samurai Rodster Logo",
      name: "Samurai Rodster",
    },
    { imgSrc: "/images/serpent.webp", alt: "Serpent Logo", name: "Serpent" },
    {
      imgSrc: "/images/shaddly-e-sport-team.webp",
      alt: "Shaddly E-Sport Team Logo",
      name: "Shaddly E-Sport Team",
    },
    {
      imgSrc: "/images/tampabay-pelicans.webp",
      alt: "Tampabay Pelicans Logo",
      name: "Tampabay Pelicans",
    },
    {
      imgSrc: "/images/the-wisdom-exchange.webp",
      alt: "The Wisdom Exchange Logo",
      name: "The Wisdom Exchange",
    },
  ],
  typography: [
    {
      imgSrc: "/images/ce-culture-carriers.webp",
      alt: "CE Culture Carriers Logo",
      name: "CE Culture Carriers",
    },
    { imgSrc: "/images/chicago.webp", alt: "Chicago Logo", name: "Chicago" },
    {
      imgSrc: "/images/cool-kidz.webp",
      alt: "Cool Kidz Logo",
      name: "Cool Kidz",
    },
    {
      imgSrc: "/images/mago-gody.webp",
      alt: "Mago Gody Logo",
      name: "Mago Gody",
    },
    {
      imgSrc: "/images/sugar-m-spice.webp",
      alt: "Sugar M Spice Logo",
      name: "Sugar M Spice",
    },
    {
      imgSrc: "/images/teaose-real-estate.webp",
      alt: "Teaose Real Estate Logo",
      name: "Teaose Real Estate",
    },
    {
      imgSrc: "/images/the-bill-club.webp",
      alt: "The Bill Club Logo",
      name: "The Bill Club",
    },
  ],
};
const services = [
  {
    icon: "fas fa-cube",
    title: "3D Logo Design",
    description: "Bold, dimensional logos that pop on any platform.",
    url: "#",
  },
  {
    icon: "fas fa-font",
    title: "Typography Logo Design",
    description: "Stylish, text-based designs that speak your brand’s tone.",
    url: "#",
  },
  {
    icon: "fas fa-star",
    title: "Iconic Logo Design",
    description: "Simple, unforgettable icons for instant recognition.",
    url: "#",
  },
  {
    icon: "fas fa-minus",
    title: "Minimalist Logos",
    description: "Clean, modern designs that make a sharp impact.",
    url: "#",
  },
  {
    icon: "fas fa-film",
    title: "Animated Logos",
    description: "Dynamic motion logos that bring your brand to life.",
    url: "#",
  },
  {
    icon: "fas fa-pencil-alt",
    title: "Custom Logos",
    description: "Unique, brand-specific designs built from scratch.",
    url: "#",
  },
  {
    icon: "fas fa-signature",
    title: "Monogram Logos",
    description: "Elegant initials turned into timeless brand marks.",
    url: "#",
  },
  {
    icon: "fas fa-shapes",
    title: "Abstract Logos",
    description: "Creative shapes and forms that stand out in any crowd.",
    url: "#",
  },
  {
    icon: "fas fa-award",
    title: "Badge Logos",
    description: "Classic emblem-style logos with a professional edge.",
    url: "#",
  },
];

const AndroidAppDevelopment = () => {
  const handleButtonClick = () => {
    // Implement your button click logic here
    console.log("Button clicked!");
  };
  const handleChatButtonClick = () => {
    // Implement your button click logic here
    console.log("Button clicked!");
  };
  return (
    <>
      <LogoMagicSection
        headingText="Best Android App Development Services in the UK"
        subheadingText="Turn your idea into a powerful mobile app with our full-scale app development services. From design to deployment, we create apps that are fast, user-friendly, and built for success."
        buttonText="Get Your Free Consultation"
        buttonAction={handleButtonClick}
        imageSrc="/images/app-development-2.png"
        imageAlt="Logo Display"
        discountText="Get Upto 60% Discount"
        bgImage="/images/app-development-1.png"
      />
      <LogoReviewSection
        chatIcon="https://cdn-icons-png.flaticon.com/512/597/597177.png"
        chatText="Start Live Chat"
        // onChatButtonClick={handleChatButtonClick}
        reviews={reviews}
      />
      <BrandSection
        heading="Android App Development Company"
        imageSrc="/images/Image-1-android-app.jpg"
        altText="All Logos"
        paragraphs={paragraphs}
      />
      <ContactBar
        phone="61-2-6190-8616"
        email="info@shopskey.com"
        liveChatLink="https://example.com/live-chat"
      />
      <ThirdContentSection
        imageSrc="/images/appdev-image.png"
        items={sectionItems}
      />
      {/* <LogoDesignSection
        header="Why Choose Us"
        subheader="Our Logo Design Portfolio"
        description="Explore our impressive logo designs that show your brand’s essence. Our team of experts combines creativity with precision to deliver standout logos."
        tabs={tabs}
        tabContents={tabContents}
      /> */}
      <PortfolioGrid
        header="Why Choose Us"
        subheader="Our Android App Development Portfolio"
        description="Explore our impressive logo designs that show your brand’s essence. Our team of experts combines creativity with precision to deliver standout logos."
        images={[
          {
            src: "/images/androidport1.webp",
            alt: "Portfolio 1",
          },
          {
            src: "/images/androidport2.webp",
            alt: "Portfolio 2",
          },
          {
            src: "/images/androidport3.webp",
            alt: "Portfolio 3",
          },
          {
            src: "/images/androidport4.webp",
            alt: "Portfolio 4",
          },
          {
            src: "/images/androidport5.webp",
            alt: "Portfolio 5",
          },
          {
            src: "/images/androidport6.webp",
            alt: "Portfolio 6",
          },
          {
            src: "/images/androidport7.webp",
            alt: "Portfolio 7",
          },
          {
            src: "/images/androidport8.webp",
            alt: "Portfolio 8",
          },
          {
            src: "/images/androidport9.webp",
            alt: "Portfolio 9",
          },
          {
            src: "/images/androidport10.webp",
            alt: "Portfolio 10",
          },
        ]}
      />

      <LogoDesignServices
        header="OUR SERVICES"
        subHeader="Logo Design Agency that Makes a Difference"
        description="Recognized as the best logo design company, our team is dedicated to delivering exceptional designs that stand out in the market. Our logo will be a powerful symbol of your business's identity and values."
        services={services}
      />
      <LogoDesignForm />
    </>
  );
};

export default AndroidAppDevelopment;
