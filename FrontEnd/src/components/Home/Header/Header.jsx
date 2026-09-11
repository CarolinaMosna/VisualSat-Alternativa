import React, { useState } from 'react'
import './Header.css'
import logo from '../../../assets/VisualSat_isotipo.png'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
    setMenuOpen(false);
  };

  return (
    <header className='header'>
      <img 
        src={logo} 
        alt='logo' 
        className='header_logo' 
        onClick={handleLogoClick}
      />
      
      <button 
        className={`menu_toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Alternar menú de navegación"
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <Link to="/pasadas" className='navbar_link text' onClick={() => setMenuOpen(false)}>Pasadas</Link>
        <Link className='navbar_link text' onClick={() => setMenuOpen(false)}>Nosotros</Link>
      </nav>
    </header>
  )
}

export default Header