import { useState } from 'react';
import Logo from './logo';
import NavBar from './Navbar';


const Header = () => {

  const [activeBurger, setActiveBurger] = useState(false);

  const toggleBurger = () => {
    setActiveBurger(!activeBurger);
  }

  return (
    <div className='md:flex md:items-center md:justify-between md:m-8 lg:mx-32'>
      <div className="flex m-6 mt-0 pt-10 justify-between items-center md:m-0">
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