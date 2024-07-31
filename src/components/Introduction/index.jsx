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
            toujours eu pour ambition de marier ces deux domaines. Savoir que
            mes projets peuvent bénéficier à un grand nombre de personnes à
            travers le monde constitue une motivation majeure pour moi.
          </span>
          <br></br>
          <br></br>Mon objectif est de continuer sur cette voie et d'atteindre
          un public mondial en utilisant mes compétences linguistiques pour
          rendre l'expérience utilisateur la plus inclusive possible. En
          développant des outils adaptés à diverses cultures et langues, je
          souhaite offrir une aide précieuse à des personnes de toutes origines
          culturelles.
        </p>

        <img className='portfolio-intro-img' src={introImage} />
      </div>
    </div>
  );
}
