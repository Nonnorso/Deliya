import { useState, useEffect, useCallback } from 'react';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 880);
  
    const toggleMenu = useCallback(() => {
      setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }, []);
  
    const closeMenu = useCallback(() => {
      setMenuOpen(false);
    }, []);
  
    const handleOutsideClick = useCallback((event) => {
      if (isMenuOpen && !event.target.closest('.menu')) {
        closeMenu();
      }
    }, [isMenuOpen, closeMenu]);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 880);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    useEffect(() => {
      window.addEventListener('click', handleOutsideClick);
  
      return () => {
        window.removeEventListener('click', handleOutsideClick);
      };
    }, [handleOutsideClick]);
  
    const navigate = useNavigate();
  
    const handleNavigate = (path) => {
      window.scrollTo(0, 0);
      navigate(path);
    };
  
    return (
      <div className="header-container">
        <div className="header-title">
          <h1><Link to="/" onClick={() => handleNavigate('/')}><span className='InitialGold'>D</span>éli&#39;ya</Link></h1>
        </div>
        {isMobile ? null : (
          <div className='DesktopNav'>
            <ul>
              <li><NavLink to="/" onClick={() => handleNavigate('/')} activeclassname="active">Accueil</NavLink></li>
              <li><NavLink to="/About" onClick={() => handleNavigate('/about')} activeclassname="active">À propos</NavLink></li>
              <li><NavLink to="/Vitrine" onClick={() => handleNavigate('/Vitrine')} activeclassname="active">Vitrine</NavLink></li>
              <li><NavLink to="/Tarif&Prestations" onClick={() => handleNavigate('/Tarif&Prestations')} activeclassname="active">Tarifs et prestations</NavLink></li>
            </ul>
          </div>
        )}
  
        {isMobile ? (
          <div
            className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            ☰
          </div>
        ) : null}
  
        {isMobile ? (
          <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => { handleNavigate('/'); closeMenu(); }}>Accueil</Link></li>
              <li><Link to="/about" onClick={() => { handleNavigate('/about'); closeMenu(); }}>À propos</Link></li>
              <li><Link to="/portfolio" onClick={() => { handleNavigate('/portfolio'); closeMenu(); }}>Portfolio</Link></li>
            </ul>
          </nav>
        ) : null}
      </div>
    );
  };
  
  export default Header;