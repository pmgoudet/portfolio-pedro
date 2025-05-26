import htmlIcon from '../assets/icon/html-icon.svg';
import htmlIconHover from '../assets/icon/html-icon-hover.svg';
import cssIcon from '../assets/icon/css-icon.svg';
import cssIconHover from '../assets/icon/css-icon-hover.svg';
import javaScript from '../assets/icon/javascript-icon.svg';
import javaScriptHover from '../assets/icon/javascript-icon-hover.svg';
import bootstrap from '../assets/icon/bootstrap-logo.svg';
import bootstrapHover from '../assets/icon/bootstrap-logo-hover.svg';
import tailwind from '../assets/icon/tailwind-icon.svg';
import tailwindHover from '../assets/icon/tailwind-icon-hover.svg';
import react from '../assets/icon/react-icon.svg';
import reactHover from '../assets/icon/react-icon-hover.svg';
import php from '../assets/icon/php-icon.svg';
import phpHover from '../assets/icon/php-icon-hover.svg';
import sql from '../assets/icon/mysql-icon.svg';
import sqlHover from '../assets/icon/mysql-icon-hover.svg';
import github from '../assets/icon/github-icon.svg';
import githubHover from '../assets/icon/github-icon-hover.svg';
import git from '../assets/icon/git-icon.svg';
import gitHover from '../assets/icon/git-icon-hover.svg';
import figma from '../assets/icon/figma-icon.svg';
import figmaHover from '../assets/icon/figma-icon-hover.svg';
import photoshop from '../assets/icon/photoshop-icon.svg';
import photoshopHover from '../assets/icon/photoshop-icon-hover.svg';
import illustrator from '../assets/icon/illustrator-icon.svg';
import illustratorHover from '../assets/icon/illustrator-icon-hover.svg';
import wordpress from '../assets/icon/wordpress-icon.svg';
import wordpressHover from '../assets/icon/wordpress-icon-hover.svg';


type Skill = {
  icon: string;
  hoverIcon: string;
  label: string;
};

function Skills() {


  const skills: Skill[] = [
    {
      icon: react,
      hoverIcon: reactHover,
      label: 'React',
    },
    {
      icon: javaScript,
      hoverIcon: javaScriptHover,
      label: 'JavaScript',
    },
    {
      icon: tailwind,
      hoverIcon: tailwindHover,
      label: 'Tailwind',
    },
    {
      icon: php,
      hoverIcon: phpHover,
      label: 'PHP',
    },
    {
      icon: sql,
      hoverIcon: sqlHover,
      label: 'MySQL',
    },
    {
      icon: github,
      hoverIcon: githubHover,
      label: 'GitHub',
    },
    {
      icon: git,
      hoverIcon: gitHover,
      label: 'Git',
    },
    {
      icon: htmlIcon,
      hoverIcon: htmlIconHover,
      label: 'HTML',
    },
    {
      icon: cssIcon,
      hoverIcon: cssIconHover,
      label: 'CSS',
    },

    {
      icon: bootstrap,
      hoverIcon: bootstrapHover,
      label: 'Bootstrap',
    },
    {
      icon: wordpress,
      hoverIcon: wordpressHover,
      label: 'WordPress',
    },
    {
      icon: figma,
      hoverIcon: figmaHover,
      label: 'Figma',
    },
    {
      icon: photoshop,
      hoverIcon: photoshopHover,
      label: 'PhotoShop',
    },
    {
      icon: illustrator,
      hoverIcon: illustratorHover,
      label: 'Illustrator',
    },

  ];

  return (
    <div className="flex gap-4 flex-wrap justify-center xl:gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative flex flex-col gap-2 w-[30%] md:max-w-28 items-center border-2 border-primary p-4 pb-2 rounded-md duration-300 hover:scale-110 shadow-lg"
        >
          <img
            src={skill.icon}
            alt={`${skill.label} icon`}
            className="w-10 absolute top-4 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          />
          <img
            src={skill.hoverIcon}
            alt={`${skill.label} icon`}
            className="w-10 absolute top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <p className="text-primary dark:group-hover:text-white dark:group-hover:font-light transition-colors duration-500 font-semibold mt-12">{skill.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Skills;