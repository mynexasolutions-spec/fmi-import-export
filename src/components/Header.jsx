import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/FMI-logo.png" alt="FMI International General Trading FZE" />
        </Link>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="active" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            <li className="mobile-only">
              <Link to="/contact" className="btn btn-primary" onClick={closeMenu} style={{ display: 'inline-block', marginTop: '10px' }}>
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
        
        <Link to="/contact" className="btn btn-primary desktop-only" onClick={closeMenu}>Get a Quote</Link>
      </div>
    </header>
  );
}

export default Header;
