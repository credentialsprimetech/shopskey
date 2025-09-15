"use client";
import Aos from "aos";
import React, { useEffect, useState } from "react";

const LogoDesignSection = ({
  header,
  subheader,
  description,
  tabs,
  tabContents,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className="plogodesign1-wrapper">
      {/* Header Section */}
      <div className="plogodesign1-header" data-aos="fade-up">
        <h2>{header}</h2>
        <h3>
          <span>{subheader}</span>
        </h3>
        <p>{description}</p>
      </div>

      {/* Tabs Buttons */}
      <div className="plogodesign1-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`plogodesign1-tab ${
              activeTab === tab.name ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {tabs.map((tab) => {
        const tabContent = tabContents[tab.name];
        return (
          <div
            key={tab.name}
            id={`plogodesign1-tab-${tab.name}`}
            className={`plogodesign1-grid ${
              activeTab === tab.name ? "active" : ""
            }`}
          >
            {tabContent && tabContent.length > 0 ? (
              tabContent.map((logo, index) => (
                <div className="plogodesign1-card" key={index}>
                  <img src={logo.imgSrc} alt={logo.alt} />
                  <p>{logo.name}</p>
                </div>
              ))
            ) : (
              <p>No logos available for this tab.</p> // Fallback message if no content is available
            )}
          </div>
        );
      })}
    </section>
  );
};

export default LogoDesignSection;
