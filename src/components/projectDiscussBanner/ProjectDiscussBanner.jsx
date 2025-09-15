"use client";


const ContactBox = ({ icon, title, description }) => (
  <div className="project-contact-box">
    <i className={icon}></i>
    <p>
      <strong>{title}</strong>
      <br />
      {description}
    </p>
  </div>
);

const ProjectDiscussBanner = ({ title, contactOptions }) => (
  <section className="project-discuss-banner">
    <div className="project-discuss-container">
      <div className="project-discuss-left">
        <h2>{title}</h2>
      </div>
      <div className="project-discuss-right">
        {contactOptions.map((option, index) => (
          <ContactBox
            key={index}
            icon={option.icon}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectDiscussBanner;
