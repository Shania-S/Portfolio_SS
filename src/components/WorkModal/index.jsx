import './index.scss';
import { RiCloseLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

export function WorkModal({
  setIsOpen,
  workProblem,
  workSolution,
  workSkills,
}) {
  const { t } = useTranslation();
  return (
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className='modalContent'>
            <h2 className='title'>{t('Problem_title')}</h2>
            <p className='problem-description'>{workProblem}</p>
            <h2 className='title'>{t('Solution_title')}</h2>
            <p className='solution-description'>{workSolution}</p>
            <h2 className='title'>{t('Skills')}</h2>
            <p className='skill-description'>{workSkills}</p>
          </div>
        </div>
      </div>
    </>
  );
}
