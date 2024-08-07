import './index.scss';
import { WorkModal } from '../WorkModal';
import { useState } from 'react';

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
        <span onClick={() => setIsOpen(true)}>Voir plus...</span>
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
        <a href={workLink}>Voir le code</a>
      </div>
    </div>
  );
}
