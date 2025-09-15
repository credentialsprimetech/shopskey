"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudiesSection = ({ caseStudies = [] }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateView = () => {
      const articles = document.querySelectorAll(
        "#case-studies-container article"
      );
      articles.forEach((article, index) => {
        if (index < visibleCount) {
          article.classList.add("visible");
        } else {
          article.classList.remove("visible");
        }
      });
    };
    updateView();
  }, [visibleCount]);

  return (
    <section className="case-studies overfow-hidden">
      <div className="bg-white" id="case-studies">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="block lg:flex lg:justify-between items-center pt-14 md:pt-24"
            data-aos="fade-up"
          >
            <div className="lg:overflow-hidden">
              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                <span>our success stories</span>
                <p style={{ fontSize: "18px" }}>
                  Behind every project is a story of transformation. Discover
                  the journeys we’ve shaped through strategy and design.
                </p>
              </h3>
            </div>
          </div>

          <div
            id="case-studies-container"
            className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-12 lg:mt-20 gap-x-16 lg:gap-x-28"
          >
            {caseStudies.map((item, index) => (
              <article
                key={index}
                style={{ marginTop: item.marginTopChecking ? `0px` : "" }}
                className="mt-12 md:mt-16 inline-block w-full CaseStudyImage"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  href={item.projectUrl}
                >
                  <div className="relative">
                    <div
                      className="h-[380px] md:h-[670px] rounded-3xl hidden lg:block"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                      }}
                    >
                      <div
                        className="transition ease-out duration-[500ms]"
                        style={{
                          position: "absolute",
                          inset: "-30px 0px",
                          willChange: "transform",
                          transform: "translateY(30px)",
                        }}
                      >
                        <img
                          src={item.image}
                          className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                          loading="lazy"
                          alt={item.alt}
                        />
                      </div>
                    </div>
                    <div className="lg:rounded-[30px] rounded-2xl lg:hidden block overflow-hidden">
                      <img
                        src={item.image}
                        className="w-full object-cover h-full transition-opacity duration-500 opacity-100"
                        loading="lazy"
                        alt={item.alt}
                      />
                    </div>
                  </div>
                  <div className="max-w-full lg:max-w-xl">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer"
                      href={item.logoLink}
                    >
                      <div className="h-[58px] w-[151px] flex">
                        <img
                          className="object-contain"
                          src={item.logo}
                          loading="lazy"
                          alt={item.alt}
                        />
                      </div>
                    </Link>
                    <div className="group relative">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:underline underline-offset-[9px] decoration-1"
                        href={item.projectUrl}
                      >
                        <h3 className="lg:mb-[20px] mb-3 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">
                          {item.title}
                        </h3>
                      </Link>
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold"
                        href={item.projectUrl}
                      >
                        <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">
                          {item.description}
                        </p>
                      </Link>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            {visibleCount < caseStudies.length && (
              <button
                id="showMoreBtn"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + 2, caseStudies.length)
                  )
                }
              >
                Show More
              </button>
            )}
            {visibleCount >= caseStudies.length && (
              <button id="showLessBtn" onClick={() => setVisibleCount(4)}>
                Show Less
              </button>
            )}
          </div>
        </div>

        <style jsx>{`
          #showMoreBtn,
          #showLessBtn {
            background: #fc501b;
            color: #fff;
            padding: 17px 38px;
            font-size: 1.22rem;
            border: none;
            border-radius: 2rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
            margin: 5px;
          }
          #showMoreBtn:hover,
          #showLessBtn:hover {
            background: #e04817;
            transform: scale(1.05);
          }
          #case-studies-container article {
            display: none;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
          }
          #case-studies-container article.visible {
            display: block;
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
