import { useState } from 'react';
import NavBar from './Navbar';
import Logo from './Logo';


const Header = () => {

  const [activeBurger, setActiveBurger] = useState(false);

  const toggleBurger = () => {
    setActiveBurger(!activeBurger);
  }

  return (
    <div className='bg-white fixed top-0 left-0 w-full z-50 md:relative md:w-auto md:flex md:items-center md:justify-between md:mx-12 md:mb-8 md:mt-0 md:pt-12 lg:mx-32 2xl:mx-60'>
      <div className="flex m-6 mt-0 pt-10 md:p-0 justify-between items-center md:m-0">
        <Logo />
        <div className={`tham tham-e-squeeze tham-w-8 z-10  ${activeBurger ? 'tham-active' : ''}`} onClick={toggleBurger}>
          <div className="tham-box md:hidden ">
            <div className="tham-inner bg-black dark:bg-white" />
          </div>
        </div >
      </div >
      <div>
        <NavBar width={activeBurger ? 'w-3/4' : 'w-0'} />
      </div>
    </div>
  );
};

export default Header;  