const features = [
  {
    icon: 'fa-solid fa-network-wired',
    title: 'Global Network',
    description: 'Strong network of trusted suppliers and buyers worldwide.',
  },
  {
    icon: 'fa-solid fa-certificate',
    title: 'Quality Assured',
    description: 'We ensure quality at every step of the sourcing process.',
  },
  {
    icon: 'fa-solid fa-hand-holding-dollar',
    title: 'Best Prices',
    description: 'Competitive pricing with maximum value for money.',
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Timely Delivery',
    description: 'On-time delivery with safe and secure shipping.',
  },
];

function WhyChooseUs() {
  return (
    <section className="why-us section-padding">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-content">
            <span className="section-subtitle text-left">WHY CHOOSE US</span>
            <h2>Your Trust, Our Responsibility</h2>
            <p className="why-us-desc">We are committed to providing the best quality products, professional service and transparent business practices.</p>
            <div className="features-list">
              {features.map((feature, index) => (
                <div className="feature-box" key={index}>
                  <div className="icon-box"><i className={feature.icon}></i></div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-us-image">
            <img src="/why-choose-us.webp" alt="Global Transportation" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
