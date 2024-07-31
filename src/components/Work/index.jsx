import './index.scss';
import { WorkCategory } from '../WorkCategory';
import bookiImage from './../../assets/images/work/booki.png';

export function Work() {
  return (
    <div className='portfolio-work'>
      <h1 className='portfolio-work-title'>Mes travaux</h1>
      <div className='work-category-card'>
        <WorkCategory
          workImage={bookiImage}
          imgDescription={'booki image'}
          workTitle={'Booki'}
          workDescription={
            "Le but du site est de permettre aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Ma mission a été d'intégrer l'interface responsive en m'appuyant sur des maquettes"
          }
          workProblem={'No problem'}
          skillDeveloped={
            "En travaillant sur ce projet, j'ai développé des compétences essentielles en design responsive, assurant que la page d'accueil fonctionne bien sur tous les appareils et toutes les tailles d'écran"
          }
        ></WorkCategory>
        <WorkCategory
          workImage={bookiImage}
          imgDescription={'booki image'}
          workTitle={'Booki'}
          workDescription={
            "Le but du site est de permettre aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Ma mission a été d'intégrer l'interface responsive en m'appuyant sur des maquettes"
          }
          workProblem={'No problem'}
          skillDeveloped={
            "En travaillant sur ce projet, j'ai développé des compétences essentielles en design responsive, assurant que la page d'accueil fonctionne bien sur tous les appareils et toutes les tailles d'écran"
          }
        ></WorkCategory>
        <WorkCategory
          workImage={bookiImage}
          imgDescription={'booki image'}
          workTitle={'Booki'}
          workDescription={
            "Le but du site est de permettre aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Ma mission a été d'intégrer l'interface responsive en m'appuyant sur des maquettes"
          }
          workProblem={'No problem'}
          skillDeveloped={
            "En travaillant sur ce projet, j'ai développé des compétences essentielles en design responsive, assurant que la page d'accueil fonctionne bien sur tous les appareils et toutes les tailles d'écran"
          }
        ></WorkCategory>
      </div>
    </div>
  );
}
