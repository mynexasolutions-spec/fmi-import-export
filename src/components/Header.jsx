import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
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
