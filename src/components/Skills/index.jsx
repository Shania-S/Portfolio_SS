import './index.scss';
import { useTranslation } from 'react-i18next';
import { SkillCategory } from '../SkillCategory';
import aspnetIcon from '../../assets/images/back/aspnetIcon.webp';
import bootstrapIcon from '../../assets/images/front/bootstrapIcon.webp';
import cssIcon from '../../assets/images/front/cssIcon.webp';
import htmlIcon from '../../assets/images/front/htmlIcon.webp';
import javascriptIcon from '../../assets/images/front/javascriptIcon.webp';
import reactIcon from '../../assets/images/front/reactIcon.webp';
import sassIcon from '../../assets/images/front/sassIcon.webp';
import EFCoreIcon from '../../assets/images/back/EFCOREIcon.webp';
import expressIcon from '../../assets/images/back/expressIcon.webp';
import linqIcon from '../../assets/images/back/linq.webp';
import mongoIcon from '../../assets/images/back/mongodbIcon.webp';
import nodeIcon from '../../assets/images/back/nodeIcon.webp';
import sharpIcon from '../../assets/images/back/sharpIcon.webp';
import sqlIcon from '../../assets/images/back/sqlIcon.webp';
import githubIcon from '../../assets/images/tools/githubIcon.webp';
import gitIcon from '../../assets/images/tools/gitIcon.webp';
import npmIcon from '../../assets/images/tools/npmIcon.webp';
import ssisIcon from '../../assets/images/tools/ssisIcon.webp';
import ssmsIcon from '../../assets/images/tools/ssmsIcon.webp';
import vscodeIcon from '../../assets/images/tools/vscodeIcon.webp';
import vsIcon from '../../assets/images/tools/vsIcon.webp';

const frontList = [
  { id: 1, src: aspnetIcon, alt: 'asp.net icon', name: 'Asp.net mvc' },
  { id: 2, src: bootstrapIcon, alt: 'bootstrap icon', name: 'Bootstrap' },
  { id: 3, src: cssIcon, alt: 'css icon', name: 'Css' },
  { id: 4, src: htmlIcon, alt: 'html icon', name: 'Html' },
  { id: 5, src: javascriptIcon, alt: 'javascript icon', name: 'Javascript' },
  { id: 6, src: reactIcon, alt: 'react icon', name: 'React' },
  { id: 7, src: sassIcon, alt: 'sass icon', name: 'Sass' },
];

const backList = [
  { id: 8, src: aspnetIcon, alt: 'asp.net icon', name: 'Asp.net mvc' },
  { id: 9, src: EFCoreIcon, alt: 'ef icon', name: 'Entity framework' },
  { id: 10, src: expressIcon, alt: 'express icon', name: 'Express js' },
  { id: 11, src: linqIcon, alt: 'linq icon', name: 'Linq' },
  { id: 12, src: mongoIcon, alt: 'mongo icon', name: 'MongoDB' },
  { id: 13, src: nodeIcon, alt: 'node icon', name: 'Node js' },
  { id: 14, src: sharpIcon, alt: 'C#', name: 'C#' },
  { id: 15, src: sqlIcon, alt: 'Mysql', name: 'MySQL' },
];

const toolsList = [
  { id: 16, src: githubIcon, alt: 'github icon', name: 'Github' },
  { id: 17, src: gitIcon, alt: 'git icon', name: 'Git' },
  { id: 18, src: npmIcon, alt: 'npm icon', name: 'Npm' },
  { id: 19, src: ssisIcon, alt: 'ssis icon', name: 'SSIS' },
  { id: 20, src: ssmsIcon, alt: 'ssms icon', name: 'SSMS' },
  { id: 21, src: vscodeIcon, alt: 'github icon', name: 'Vs code' },
  { id: 22, src: vsIcon, alt: 'vs icon', name: 'Visual studio' },
];

export function Skills() {
  const { t } = useTranslation();
  return (
    <div className='portfolio-skills' id='Skills'>
      <h1 className='portfolio-skills-title'> {t('Skills')}</h1>
      <div className='skill-category-card'>
        <SkillCategory title={t('Frontend')} images={frontList}></SkillCategory>
        <SkillCategory title={t('Backend')} images={backList}></SkillCategory>
        <SkillCategory title={t('Tools')} images={toolsList}></SkillCategory>
      </div>
    </div>
  );
}
