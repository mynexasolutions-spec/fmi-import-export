import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section className="cta section-padding">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-info">
            <h2>Ready to Expand Your Business Globally?</h2>
            <p>Let's build a strong business relationship and grow together. Reach out to us today.</p>
            
            <div className="cta-contact-details">
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+97143957077" style={{ color: 'white' }}>+971 4 395 7077</a>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@fmiinternationalfze.com" style={{ color: 'white' }}>info@fmiinternationalfze.com</a>
              </div>

            </div>
          </div>
          
          <div className="cta-form-container">
            <h3>Send us a message</h3>
            <form className="cta-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const phone = formData.get('phone');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const text = `Hello, I would like to get in touch.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${message}`;
              window.open(`https://wa.me/971589775688?text=${text}`, '_blank');
            }}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                <i className="fa-brands fa-whatsapp"></i> Contact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
