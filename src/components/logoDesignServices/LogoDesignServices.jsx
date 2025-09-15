import React, { useEffect } from 'react';

const LogoDesignServices = ({ header, subHeader, description, services }) => {
  // Handle the click event to open URLs in a new tab
  useEffect(() => {
    document.querySelectorAll('.ninebox-box').forEach(box => {
      box.addEventListener('click', () => {
        const url = box.getAttribute('data-url');
        if (url) window.open(url, '_blank');
      });
    });
  }, []);

  return (
    <section className="ninebox-services-section">
      <div className="ninebox-container">
        <div className="ninebox-header">
          <h3>{header}</h3>
          <h2>
            Partner with a <span style={{ color: '#FC501B', textTransform: 'capitalize' }}>{subHeader}</span>
          </h2>
          <p>{description}</p>
        </div>

        <div className="ninebox-grid">
          {services.map((service, index) => (
            <div className="ninebox-box" key={index} data-url={service.url}>
              <div className="ninebox-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.url}>View Service Details →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoDesignServices;
