import githubIcon from '../assets/icon/github-degrade.svg';
import linkedinIcon from '../assets/icon/linkedin-degrade.svg';

const SocialIcons = ({ showOnMobile = true }) => (
  <div className={`flex justify-end gap-4 mt-8 ${showOnMobile ? 'md:hidden' : ''}`}>
    <a href=""><img src={githubIcon} alt="GitHub Icon" className='h-10' /></a>
    <a href=""><img src={linkedinIcon} alt="LinkedIn Icon" className='h-10' /></a>
  </div>
);

export default SocialIcons;