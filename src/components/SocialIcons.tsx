import githubIcon from '../assets/icon/github-degrade.svg';
import linkedinIcon from '../assets/icon/linkedin-degrade.svg';

const SocialIcons = ({ showOnMobile = true }) => {
  const containerClasses = showOnMobile
    ? 'flex md:hidden justify-end gap-4 mt-8'
    : 'hidden md:flex md:justify-normal md:mt-8 gap-4';

  return (
    <div className={containerClasses}>
      <a href="https://github.com/pmgoudet" target='_blank'><img src={githubIcon} alt="GitHub Icon" className='h-10 lg:h-6 duration-500 lg:hover:scale-110' /></a>
      <a href="https://www.linkedin.com/in/pmgoudet" target='_blank'><img src={linkedinIcon} alt="LinkedIn Icon" className='h-10 lg:h-6 duration-500 lg:hover:scale-110' /></a>
    </div>
  );
};
export default SocialIcons;