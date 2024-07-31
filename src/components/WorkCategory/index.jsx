import './index.scss';

export function WorkCategory({
  workImage,
  imgDescription,
  workTitle,
  workDescription,
  workProblem,
  skillDeveloped,
}) {
  return (
    <div className='work-card'>
      <div className='work-container'>
        <div className='img-container'>
          <img src={workImage} alt={imgDescription} />
        </div>

        <h2 className='title'>{workTitle}</h2>
        <p className='work-description'>{workDescription}</p>
        <span>Voir plus...</span>
        <div className='work-problematique'>
          <h3>Problématique</h3>
          <p>{workProblem}</p>
        </div>
        <div className='work-skill'>
          <h3>Compétences développées</h3>
          <p>{skillDeveloped}</p>
        </div>
      </div>

      <div className='work-buttons'>
        <button>Voir le code</button>
        <button>Voir la page</button>
      </div>
    </div>
  );
}
