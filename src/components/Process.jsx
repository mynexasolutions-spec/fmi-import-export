const steps = [
  { icon: 'fa-solid fa-headset', title: '1. Inquiry', description: 'Share your requirements with us.' },
  { icon: 'fa-solid fa-file-invoice-dollar', title: '2. Quotation', description: 'We provide the best quotation.' },
  { icon: 'fa-solid fa-check-to-slot', title: '3. Confirmation', description: 'Order confirmed and process initiated.' },
  { icon: 'fa-solid fa-ship', title: '4. Shipping', description: 'Safe packing and worldwide shipping.' },
  { icon: 'fa-solid fa-truck', title: '5. Delivery', description: 'On-time delivery to your destination.' },
];

function Process() {
  return (
    <section className="process section-padding bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">HOW WE WORK</span>
          <h2>Simple Process, Smooth Trade</h2>
          <p>We make international trade easy and hassle-free.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} style={{ display: 'contents' }}>
              <div className="step">
                <div className="step-icon"><i className={step.icon}></i></div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-arrow"><i className="fa-solid fa-chevron-right"></i></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
