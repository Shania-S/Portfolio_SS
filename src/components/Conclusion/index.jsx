import './index.scss';
import concluImage from './../../assets/images/byebye.png';
import { useTranslation } from 'react-i18next';

export function Conclusion() {
  const { t } = useTranslation();
  return (
    <div className='portfolio-conclusion'>
      <div className='portfolio-conclusion-details'>
        <p className='portfolio-conclusion-para'>
          <span className='conclusion-phrase'>{t('Thank_you')} 💝</span>
        </p>

        <img className='portfolio-conclusion-img' src={concluImage} />
      </div>
    </div>
  );
}
