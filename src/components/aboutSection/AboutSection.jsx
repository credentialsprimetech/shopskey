"use client";
import "./AboutSection.css";
// Section Row Component (Text and Image with Dynamic Layout)
const SectionRow = ({
  imgSrc,
  imgAlt,
  layoutDirection,
  heading,
  paragraph,
  subheading,
  mission,
  vision,
}) => {
  const isLTR = layoutDirection === "ltr";

  return (
    <div className={`abtwhy-row ${isLTR ? "abtwhy-top flex-row-reverse" : "abtwhy-bottom"}`}>
      {/* Text Column */}
      <div
        className={`abtwhy-col ${
          isLTR ? "abtwhy-text-left" : "abtwhy-text-right"
        }`}
      >
        <h2 className="abtwhy-heading">{heading}</h2>
        {subheading && <h3 className="abtwhy-subheading">{subheading}</h3>}
        <p className="abtwhy-paragraph">{paragraph}</p>
        {mission && (
          <p className="abtwhy-paragraph2">
            <strong>Our Mission:</strong> {mission}
          </p>
        )}
        {vision && (
          <p className="abtwhy-paragraph2">
            <strong>Our Vision:</strong> {vision}
          </p>
        )}
      </div>

      {/* Image Column */}
      <div
        className={`abtwhy-col ${
          isLTR ? "abtwhy-img-right" : "abtwhy-img-left"
        }`}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`abtwhy-img${isLTR ? "" : "2"}`}
        />
      </div>
    </div>
  );
};

// Main Component (Combines Both Sections)
const AboutSection = ({
  title,
  paragraph,
  topImgSrc,
  topImgAlt,
  bottomImgSrc,
  bottomImgAlt,
  whyChooseSubheading,
  whyChooseParagraph,
  mission,
  vision,
  layoutDirection = "ltr", // Default layout to Left-to-Right
}) => (
  <section className="abtwhy">
    {/* Top Section */}
    <SectionRow
      imgSrc={topImgSrc}
      imgAlt={topImgAlt}
      layoutDirection={layoutDirection}
      heading={title}
      paragraph={paragraph}
    />

    {/* Bottom Section */}
    <SectionRow
      imgSrc={bottomImgSrc}
      imgAlt={bottomImgAlt}
      layoutDirection={layoutDirection}
      subheading={whyChooseSubheading}
      paragraph={whyChooseParagraph}
      mission={mission}
      vision={vision}
    />
  </section>
);

export default AboutSection;
