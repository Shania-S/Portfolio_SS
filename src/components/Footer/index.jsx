import './index.scss';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className='portfolio-footer'>
      <div className='footer-quote'>
        <p>
          "{t('Quote')}" <br></br>
          <span>- David Goggins - </span>
        </p>
      </div>
      <div className='footer-credit'>
        <span>© Sha - 2024</span>
      </div>
    </div>
  );
}
