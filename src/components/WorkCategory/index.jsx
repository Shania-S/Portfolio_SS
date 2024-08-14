import './index.scss';
import { WorkModal } from '../WorkModal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function WorkCategory({
  workImage,
  imgDescription,
  workTitle,
  workDescription,
  workProblem,
  workSolution,
  skillDeveloped,
  workLink,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className='work-card'>
      <div className='work-container'>
        <div className='img-container'>
          <img src={workImage} alt={imgDescription} />
        </div>
        <div className='description-container'>
          <h2 className='title'>{workTitle}</h2>
          <p className='work-description'>{workDescription}</p>
        </div>
        <span onClick={() => setIsOpen(true)}>{t('See_more')}...</span>
      </div>
      {isOpen && (
        <WorkModal
          setIsOpen={setIsOpen}
          workProblem={workProblem}
          workSolution={workSolution}
          workSkills={skillDeveloped}
        />
      )}
      <div className='work-buttons'>
        <a href={workLink} target='_blank' rel='noopener noreferrer'>
          {t('See_code')}
        </a>
      </div>
    </div>
  );
}
