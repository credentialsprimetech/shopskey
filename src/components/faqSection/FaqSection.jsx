"use client";

import { useState } from "react";

export default function FaqSection({
  title = "Frequently Asked Questions",
  faqs = [
    {
      question: "How long does it take to build a website or app?",
      answer: "The timeline depends on the project's complexity. A basic website may take 2–4 weeks, while a custom web or mobile app can take 6–12 weeks or more."
    },
    {
      question: "What platforms do you develop apps for?",
      answer: "We develop apps for iOS, Android, and cross-platform using technologies like Flutter and React Native."
    },
    {
      question: "Do you offer custom designs or use templates?",
      answer: "We offer fully customized designs tailored to your brand and goals. Templates can be used upon request for quicker turnaround."
    },
    {
      question: "Can I update my website or app after it’s built?",
      answer: "Yes! We build with user-friendly CMS platforms or provide admin panels so you can easily manage and update content."
    },
    {
      question: "Will my website/app be mobile-friendly?",
      answer: "Absolutely. Every product we develop is responsive and works smoothly on all screen sizes and devices."
    }
  ]
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <h3 className="faq-title">{title}</h3>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <button className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.question}
            <span className="icon">{activeIndex === index ? "−" : "+"}</span>
          </button>
          <div className="faq-answer" style={{ display: activeIndex === index ? "block" : "none" }}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
