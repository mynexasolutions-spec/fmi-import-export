import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about-col">
            <Link to="/" className="logo footer-logo">
              <img src="/FMI-logo.png" alt="FMI International General Trading FZE" />
            </Link>
            <p>We are a global import and export company providing quality products, reliable service and strong business partnerships worldwide.</p>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col contact-col">
            <h4>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="tel:+97143957077">
                  <i className="fa-solid fa-phone"></i> +971 4 395 7077
                </a>
              </li>
              <li>
                <a href="mailto:info@fmiinternationalfze.com">
                  <i className="fa-solid fa-envelope"></i> info@fmiinternationalfze.com
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FMI International General Trading FZE. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
