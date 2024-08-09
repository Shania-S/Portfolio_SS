import './index.scss';
import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import portfolioLogoBanner from './../../assets/images/grin_smile.png';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
import cookies from 'js-cookie';

export function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const { t } = useTranslation();
  const languages = [
    { code: 'fr', name: 'Français', country_code: 'fr' },
    { code: 'en', name: 'English', country_code: 'gb' },
    {
      code: 'ko',
      name: '한국어',
      country_code: 'kr',
    },
    {
      code: 'es',
      name: 'Español',
      country_code: 'es',
    },
  ];

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
      <button className='dropdown-button-lang' onClick={toggleDropdown}>
        <MdLanguage style={{ fontSize: '30px' }} />

        {isDropdownOpen && (
          <div className='options-lang-container'>
            <ul className='options-lang'>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code} className='lang-item'>
                  <button
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code}`}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
      <div className='iconBar' onClick={handleToggle}>
        <FaBarsStaggered />
      </div>

      <div className={`nav-elements   ${isOpen ? 'open' : ''}`}>
        <ul className={`portfolio-nav__list`}>
          <li className='portfolio-nav__item'>
            <a href='#About'>{t('About')}</a>
          </li>
          <li className='portfolio-nav__item'>
            <a href='#Skills'>{t('Skills')}</a>
          </li>
          <li className='portfolio-nav__item'>
            <a href='#Work'>{t('Work')}</a>
          </li>
          <li className='portfolio-nav__item'>
            <a href='#Contact'>{t('Contact')}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
