import introImage from './../../assets/images/about.png';
import resumeFile from './../../assets/Resume_Shania_Sidimana.pdf';
import { useTranslation } from 'react-i18next';
import { saveAs } from 'file-saver';
import './index.scss';

export function Introduction() {
  const { t } = useTranslation();
  const handleDownload = () => {
    saveAs(resumeFile, 'Resume_Shania_Sidimana.pdf');
  };

  return (
    <div className='portfolio-introduction' id='About'>
      <h1 className='portfolio-intro-title'>{t('About')}</h1>
      <div className='portfolio-intro-details'>
        <p className='portfolio-intro-para'>
          <span className='intro-phrase'>
            {t('Intro_para_phrase_Sha')}, <br></br>&lt;
            {t('Intro_para_phrase_webdev')}/&gt;
          </span>
          <br></br>
          <br></br>
          {t('Intro_para_first')}
          <br></br>
          <br></br> {t('Intro_para_second')}
        </p>

        <img className='portfolio-intro-img' src={introImage} />
      </div>
      <p className='downloadResume'>
        {t('Download_resume')}
        <a onClick={handleDownload}> {t('Download_resume_here')}</a>
      </p>
    </div>
  );
}
