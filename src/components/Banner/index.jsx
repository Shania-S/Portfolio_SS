import './index.scss';
import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import portfolioLogoBanner from './../../assets/images/grin_smile.png';

export function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='portfolio-banner'>
      <div className='portfolio-logo-banner'>
        <img
          className='portfolio-logo-img'
          src={portfolioLogoBanner}
          alt="Shania's smiling bitmoji"
        />
        <span className='portfolio-logo-title'>- ShA# -</span>
      </div>
      <div className='iconBar' onClick={handleToggle}>
        <FaBarsStaggered />
      </div>

      <div className={`nav-elements   ${isOpen ? 'open' : ''}`}>
        <ul className={`portfolio-nav__list`}>
          <li className='portfolio-nav__item'>
            <a href='#About'>À propos</a>
          </li>
          <li className='portfolio-nav__item'>
            <a href='#Skills'>Mes compétences</a>
          </li>
          <li className='portfolio-nav__item'>
            <a href='#Work'>Mes travaux</a>
          </li>
          <li className='portfolio-nav__item'>
            <a href='#Contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
