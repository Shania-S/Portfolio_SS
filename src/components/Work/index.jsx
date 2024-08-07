import './index.scss';
import { WorkCategory } from '../WorkCategory';
import bookiImage from './../../assets/images/work/Booki.png';
import ninaImage from './../../assets/images/work/Nina.png';
import kasaImage from './../../assets/images/work/Kasa.png';
import grimoireImage from './../../assets/images/work/Vieux_grimoire.png';

const workList = [
  {
    id: 1,
    src: bookiImage,
    alt: 'booki image',
    title: 'Booki',
    description:
      'Le but du site est de permettre aux usagers de trouver des hébergements et des activités dans la ville de leur choix.',
    problem:
      "L'interface du site doit être utilisable sur une large gamme de dispositifs, allant des petits écrans de smartphones aux grands écrans de bureau.",
    solution:
      "J’ai utilisé des techniques de media queries pour adapter les composants de l'interface aux différentes tailles d'écran. J'ai également testé l'interface sur divers appareils physiques et émulateurs pour garantir une expérience utilisateur cohérente et fluide",
    skills:
      "En travaillant sur ce projet, j’ai développé des compétences essentielles en design responsive, assurant que la page d'accueil fonctionne bien sur tous les appareils et toutes les tailles d'écran.",
    codeLink: 'https://github.com/Shania-S/Booki',
  },
  {
    id: 2,
    src: ninaImage,
    alt: 'nina image',
    title: 'Nina Carducci',
    description:
      'Dans le cadre de ce projet, j’ai optimisé le référencement du site, en améliorant sa performance et son accessibilité.',
    problem:
      "Le temps de chargement du site est long, ce qui entraîne mauvaise expérience utilisateur. Le site ne respecte pas les standards d'accessibilité, rendant la navigation difficile pour les personnes ayant des handicaps visuels. Le site a un faible classement dans les moteurs de recherche, ce qui limite sa visibilité.",
    solution:
      'Pour palier à tout cela, j’ai compressé les images, utilisé des formats modernes (comme WebP) pour réduire leur taille sans perte significative de qualité, modifié les scripts JavaScript pour les charger de manière asynchrone ou différée, modifié les couleurs de texte et de fond pour respecter les ratios de contraste recommandés, assurant ainsi une meilleure lisibilité pour les personnes malvoyantes, révisé la hiérarchie des balises de titre pour structurer correctement le contenu et améliorer la compréhension du contenu par les moteurs de recherche et utilisé Lighthouse et Wave pour évaluer les performances actuelles du site et son accessibilité.',
    skills:
      'En travaillant sur ce projet, j’ai développé des compétences optimisation du référencement (SEO) et accessibilité.',
    codeLink: 'https://github.com/Shania-S/Nina-Carducci',
  },
  {
    id: 3,
    src: kasaImage,
    alt: 'kasa image',
    title: 'Kasa',
    description:
      'Kasa est une entreprise de location d’appartements entre particuliers. Dans ce projet, j’ai implémenté le front-end du site en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive.',
    problem:
      "Des problèmes liés aux erreurs de navigation, des redirections incorrectes ou des pages 404 lorsqu'on navigue entre les différentes sections de l'application.",
    solution:
      "J’ai revu et corrigé la configuration des routes pour s'assurer qu'elles correspondent aux composants corrects et gèrent correctement les paramètres d'URL.",
    skills:
      'J’ai développé des compétences en react et react router. J’ai également appris à utiliser SASS.',
    codeLink: 'https://github.com/Shania-S/Kasa',
  },
  {
    id: 4,
    src: grimoireImage,
    alt: 'grimoire image',
    title: 'Mon vieux grimoire',
    description:
      "Dans le cadre de ce projet, j’ai developpé le back-end d'un site de notation de livres. Mon objectif a été de créer un serveur avec Express et de le connecter à une base de données MongoDB.",
    problem:
      "Gestion efficace des téléchargements d'images et optimisation pour minimiser l'impact sur les performances du site. Certaines routes de l'application ne fonctionnent pas correctement car elles ne sont pas définies dans le bon ordre, entraînant des conflits et des erreurs de routage.",
    solution:
      "J’ai utilisé Multer pour gérer les téléchargements de fichiers, en configurant les options de stockage et de gestion des fichiers. J’ai aussi utilisé des bibliothèques comme Sharp pour optimiser les images téléchargées, en réduisant leur taille sans compromettre la qualité.En ce qui concerne les routes, j’ai revu l'ordre des définitions de routes pour s'assurer que les routes spécifiques sont définies avant les routes générales.",
    skills:
      "J’ai développé des compétences en développement backend, en particulier avec Node.js, express et MongoDB. Ces compétences incluent la création et la gestion de serveurs, la connexion et la manipulation de bases de données, la mise en place de modèles de données, la réalisation d'opérations CRUD, ainsi que la mise en œuvre de systèmes d'authentification et de sécurité des données.",
    codeLink: 'https://github.com/Shania-S/Mon-vieux-grimoire',
  },
];

export function Work() {
  return (
    <div className='portfolio-work'>
      <h1 className='portfolio-work-title'>Mes travaux</h1>

      <ul className='work-category-card'>
        {workList.map((work) => (
          <li key={work.id}>
            <WorkCategory
              workImage={work.src}
              imgDescription={work.alt}
              workTitle={work.title}
              workDescription={work.description}
              workProblem={work.problem}
              workSolution={work.solution}
              skillDeveloped={work.skills}
              workLink={work.codeLink}
            ></WorkCategory>
          </li>
        ))}
      </ul>
    </div>
  );
}
