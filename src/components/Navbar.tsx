import SocialIcons from './SocialIcons';
import Darkmode from './Darkmode';

interface NavBarProps {
  width: string;
}

function NavBar(props: NavBarProps) {

  const menuNavBar: string[] = ["Moi", "Projets", "Skills", "Graphisme", "Contact"];

  return (
    <div className={`h-screen bg-white dark:bg-dark-color ${props.width} absolute right-0 top-0 z-0 shadow-2xl md:shadow-none duration-300 overflow-x-hidden md:w-full md:h-auto md:relative`}>
      <nav className="text-right m-6 mt-32 md:m-0 md:flex md:items-center md:gap-8">
        <ul className='md:flex gap-6 lg:gap-8'>
          {menuNavBar.map(item =>
            <li className="mb-6 md:mb-0 text-xl md:text-base dark:text-white relative group" key={item}>
              <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-100 group-hover:after:w-full">
                {item}
              </a>
            </li>
          )}
        </ul>
        <SocialIcons />
        <Darkmode />
      </nav>
    </div>
  )
}

export default NavBar;