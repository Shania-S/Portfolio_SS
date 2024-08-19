import './index.scss';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaDiscord } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();
  return (
    <div className='portfolio-contact' id='Contact'>
      <h1 className='portfolio-contact-title'>{t('Contact')}</h1>
      <div className='portfolio-contact-list'>
        <a
          className='social linkedin'
          href='https://www.linkedin.com/in/shania-sidimana/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Redirecting to my linkedin account'
        >
          <FaLinkedinIn style={{ fontSize: '1rem' }} />
        </a>
        <a
          className='social mail'
          href='mailto:shaniasidimana1@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Opening the email box'
        >
          <IoIosMail style={{ fontSize: '1rem' }} />
        </a>
        <a
          className='social discord'
          href='https://discord.com/users/shania0938'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Redirecting to my discord accound'
        >
          <FaDiscord style={{ fontSize: '1rem' }} />
        </a>
      </div>
    </div>
  );
}
