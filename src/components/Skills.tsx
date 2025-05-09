//! nao esquece de por no readme o npm i hamburguer machin la
import htmlIcon from '../assets/icon/html-icon.svg';
import htmlIconHover from '../assets/icon/html-icon-hover.svg';
import cssIcon from '../assets/icon/css-icon.svg';
import cssIconHover from '../assets/icon/css-icon-hover.svg';


type Skill = {
  icon: string;
  hoverIcon: string;
  label: string;
};

function Skills() {


  const skills: Skill[] = [
    {
      icon: htmlIcon,
      hoverIcon: htmlIconHover,
      label: 'HTML',
    },
    {
      icon: htmlIcon,
      hoverIcon: htmlIconHover,
      label: 'HTML',
    },
    {
      icon: htmlIcon,
      hoverIcon: htmlIconHover,
      label: 'HTML',
    },
    // {
    //   icon: cssIcon,
    //   hoverIcon: cssIconHover,
    //   label: 'CSS',
    // },
    // E assim por diante
  ];

  return (
    <div className='flex gap-4 flex-wrap justify-center'>
      {skills.map((skill, index) => (
        <div key={index} className='flex flex-col gap-2 w-[30%] items-center border-2 border-primary p-4 pb-2 rounded-md'>
          <img src={skill.icon} alt={`${skill.label} icon`} className='w-10' />
          <p className='text-gradient-primary font-semibold'>{skill.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Skills;