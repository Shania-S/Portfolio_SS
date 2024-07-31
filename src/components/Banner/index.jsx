import './index.scss';
import { NavLink } from 'react-router-dom';
import portfolioLogoBanner from './../../assets/images/grin_smile.png';

export function Banner() {
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

      <ul className='portfolio-nav__list'>
        <li className='portfolio-nav__item'>À propos</li>
        <li>Mes compétences</li>
        <li>Mes travaux</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
