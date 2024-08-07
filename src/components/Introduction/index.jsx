import introImage from './../../assets/images/about.png';
import './index.scss';

export function Introduction() {
  return (
    <div className='portfolio-introduction'>
      <h1 className='portfolio-intro-title'>À propos</h1>
      <div className='portfolio-intro-details'>
        <p className='portfolio-intro-para'>
          <span className='intro-phrase'>
            Je suis Shania ou Sha tout simplement, <br></br>&lt;développeuse
            web/&gt;
          </span>
          <br></br>
          <br></br>
          <span>
            Passionnée par l'apprentissage des langues étrangères et intéressée
            par le développement web et les nouvelles technologies, j'ai
            toujours eu pour ambition de marier ces deux domaines.
          </span>
          <br></br>
          <br></br>En développant des outils adaptés à diverses cultures et
          langues, je souhaite offrir une aide précieuse à des personnes de
          toutes origines culturelles.
        </p>

        <img className='portfolio-intro-img' src={introImage} />
      </div>
    </div>
  );
}
