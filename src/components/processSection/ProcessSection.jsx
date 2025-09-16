import React, { useEffect, useState } from "react";
import styles from "./NewportProcess.module.css";

export default function ProcessSection({
  heading = "Web and App Development Process",
  subheading = "We follow a streamlined process to deliver tailored web and app solutions.",
  ctaLabel = "View More →",
  ctaLink = "#",
  stages = [],
}) {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`.${styles.section}`);
      const stagesDOM = document.querySelectorAll(`.${styles.stage}`);
      const scrollY = window.scrollY + window.innerHeight / 100;
      console.log(scrollY);

      stagesDOM.forEach((stage, index) => {
        const offset = stage.offsetTop + section.offsetTop;
        if (scrollY >= offset) {
          // stage.classList.add(styles.visible);
          setActiveStage(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            {heading}
            <p className={styles.highlight}>{subheading}</p>
          </h1>
          {ctaLabel && (
            <a href={ctaLink} className={styles.viewMore}>
              {ctaLabel}
            </a>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                height: `${((activeStage + 1) / stages.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className={styles.stages}>
            {stages.map((s, idx) => (
              <div
                key={idx}
                className={`${styles.stage} ${
                  activeStage === idx ? styles.active : ""
                }`}
              >
                <div className={styles.number}>{s.number}</div>
                <h2 className={styles.title}>{s.title}</h2>
                <p className={styles.description}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div
            className={styles.imageContainer}
            style={{
              transform:
                activeStage === stages.length - 1
                  ? "translateY(0%)"
                  : "translateY(-50%)",
            }}
          >
            <div className={styles.floatingElements}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
            {stages.map((s, idx) => (
              <div
                key={idx}
                className={`${styles.imageWrapper} ${
                  activeStage === idx ? styles.active : ""
                }`}
              >
                <div className={styles.imageContent}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className={styles.processImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
