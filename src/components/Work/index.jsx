import './index.scss';
import { WorkCategory } from '../WorkCategory';
import bookiImage from './../../assets/images/work/Booki.png';
import ninaImage from './../../assets/images/work/Nina.png';
import kasaImage from './../../assets/images/work/Kasa.png';
import grimoireImage from './../../assets/images/work/Vieux_grimoire.png';
import { useTranslation } from 'react-i18next';

export function Work() {
  const { t } = useTranslation();

  const workList = [
    {
      id: 1,
      src: bookiImage,
      alt: 'booki image',
      title: 'Booki',
      description: t('Booki_description'),
      problem: t('Booki_problem_description'),
      solution: t('Booki_solution_description'),
      skills: t('Booki_skill_description'),
      codeLink: 'https://github.com/Shania-S/Booki',
    },
    {
      id: 2,
      src: ninaImage,
      alt: 'nina image',
      title: 'Nina Carducci',
      description: t('Nina_description'),
      problem: t('Nina_problem_description'),
      solution: t('Nina_solution_description'),
      skills: t('Nina_skill_description'),
      codeLink: 'https://github.com/Shania-S/Nina-Carducci',
    },
    {
      id: 3,
      src: kasaImage,
      alt: 'kasa image',
      title: 'Kasa',
      description: t('Kasa_description'),
      problem: t('Kasa_problem_description'),
      solution: t('Kasa_solution_description'),
      skills: t('Kasa_skill_description'),
      codeLink: 'https://github.com/Shania-S/Kasa',
    },
    {
      id: 4,
      src: grimoireImage,
      alt: 'grimoire image',
      title: 'Mon vieux grimoire',
      description: t('Grimoire_description'),
      problem: t('Grimoire_problem_description'),
      solution: t('Grimoire_solution_description'),
      skills: t('Grimoire_skill_description'),
      codeLink: 'https://github.com/Shania-S/Mon-vieux-grimoire',
    },
  ];

  return (
    <div className='portfolio-work' id='Work'>
      <h1 className='portfolio-work-title'>{t('My_work')}</h1>

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
