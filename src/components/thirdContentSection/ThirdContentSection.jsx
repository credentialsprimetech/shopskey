"use client";



const ThirdContentSection = ({ imageSrc, items }) => {
  return (
    <section className="cus-thrdcon-section">
      <div className="cus-thrdcon-container">
        <div className="cus-thrdcon-row">
          {/* Image Column */}
          <div className="cus-thrdcon-imgbox">
            <div className="cus-thrdcon-img-wrapper">
              <img src={imageSrc} alt="Logo Design" />
            </div>
          </div>

          {/* Content Column */}
          <div className="cus-thrdcon-contentbox">
            {items.map((item, index) => (
              <div className="cus-thrdcon-item" key={index}>
                <img src={item.icon} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdContentSection;
