import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">FMI INTERNATIONAL GENERAL TRADING FZE</span>
          <h1>Connecting Markets,<br /><span className="text-primary">Delivering</span> Excellence</h1>
          <p>Your trusted partner in international trade. We import and export a wide range of quality products across the globe with reliability, transparency and on-time delivery.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/quote" className="btn btn-outline">Get a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
