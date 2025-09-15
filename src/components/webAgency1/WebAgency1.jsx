"use client";
import "./WebAgency1.css";
export default function WebAgency1({
  imageSrc = "https://shopskey.com/images/Web-and-App-Development-image.png",
  imageAlt = "Web Agency Image",
  heading = "Web and App Development",
  highlighted = "Agency",
  paragraphs = [
    "Shopskey is a leading web and app development agency dedicated to transforming your ideas into powerful digital solutions. We specialize in creating custom websites, mobile applications, and scalable software tailored to your unique business goals.",
    "By leveraging cutting-edge technologies, Shopskey ensures seamless functionality, responsive design, and exceptional user experiences that drive engagement and long-term growth. From intuitive mobile apps to dynamic web platforms, we deliver high-quality, results-driven solutions that align with your brand's vision.",
    "Our collaborative approach means we work closely with clients at every stage, ensuring each project meets their needs and exceeds expectations. With a focus on innovation, reliability, and performance, Shopskey empowers businesses to succeed in today's competitive digital landscape.",
    "As your trusted web, app development, and digital marketing partner, Shopskey is here to bring your vision to life with precision and creativity. Let's build your digital future together."
  ]
}) {
  return (
    <section className="webagency1">
      <div className="container">
        <div className="content-wrapper">

          {/* Left Image */}
          <div className="left-image">
            <img src={imageSrc} alt={imageAlt} />
          </div>

          {/* Right Content */}
          <div className="right-content">
            <h2>
              {heading} <span>{highlighted}</span>
            </h2>
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
