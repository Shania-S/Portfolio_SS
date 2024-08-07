import './index.scss';
import { RiCloseLine } from 'react-icons/ri';

export function WorkModal({
  setIsOpen,
  workProblem,
  workSolution,
  workSkills,
}) {
  return (
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <button className='closeBtn' onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className='modalContent'>
            <h2 className='title'>Problem</h2>
            <p className='problem-description'>{workProblem}</p>
            <h2 className='title'>Solution</h2>
            <p className='solution-description'>{workSolution}</p>
            <h2 className='title'>Skills</h2>
            <p className='skill-description'>{workSkills}</p>
          </div>
        </div>
      </div>
    </>
  );
}
