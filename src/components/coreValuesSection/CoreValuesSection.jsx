import React from 'react';

const CoreValueCard = ({ imgSrc, title, description }) => (
  <div className="core-value-card">
    <img src={imgSrc} alt={title} />
    <div className="core-value-title">{title}</div>
    <div className="core-value-desc">{description}</div>
  </div>
);

const CoreValuesSection = ({ values }) => (
  <section className="core-values-section">
    <div className="core-values-container">
      <h2 className="core-values-heading">Our Core Values</h2>
      <p className="core-values-subheading">
        The foundation of Shopskey has been laid upon these four core values.
      </p>

      <div className="core-values-grid">
        {values.map((value, index) => (
          <CoreValueCard
            key={index}
            imgSrc={value.imgSrc}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CoreValuesSection;
