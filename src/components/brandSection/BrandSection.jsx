"use client";

const BrandSection = ({ heading, imageSrc, altText, paragraphs }) => {
  return (
    <section className="cus-brand-section">
      <div className="cus-container1">
        <h2 className="cus-heading">{heading}</h2>

        <div className="cus-row">
          <div className="cus-col-image">
            <img src={imageSrc} alt={altText} />
          </div>
          <div className="cus-col-text">
            {paragraphs.map((para, index) => (
              <>
                <p key={index}>{para}</p>
                <br />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
