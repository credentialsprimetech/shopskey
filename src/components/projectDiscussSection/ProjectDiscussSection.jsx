"use client";

export default function ProjectDiscussSection({
  heading = "From Code to Clicks",
  description = "From sleek websites to powerful mobile apps, we design and build digital experiences that engage and convert. Whether you're starting fresh or scaling up, we bring your vision to life across all platforms.",
  buttonText = "LET'S CONNECT!",
  onConnect = () => {
    if (typeof window !== "undefined" && typeof window.openZendeskChat === "function") {
      window.openZendeskChat();
    } else {
      console.warn("openZendeskChat() is not defined.");
    }
  }
}) {
  return (
    <section className="project-discuss-section">
      <div className="container">
        <h3 className="big-heading">{heading}</h3>
        <p
          style={{
            fontSize: "18px",
            fontFamily: "'Manrope', sans-serif",
            color: "white",
            paddingRight: "14%",
            paddingLeft: "14%"
          }}
        >
          {description}
        </p>
        <br />
        <a href="javascript:void(0);" className="btn-outline" onClick={onConnect}>
          {buttonText}
        </a>
      </div>
    </section>
  );
}
