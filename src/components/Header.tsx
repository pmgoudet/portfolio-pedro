import { useState, useRef, useEffect } from 'react';
import NavBar from './Navbar';
import Logo from './Logo';
import SeparatorLine from "./SeparatorLine";


const Header = () => {

  const [activeBurger, setActiveBurger] = useState(false);
  const toggleBurger = () => { setActiveBurger(!activeBurger); }
  const navRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        burgerRef.current &&
        !burgerRef.current.contains(target)
      ) {
        setActiveBurger(false);
      }
    };

    if (activeBurger) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeBurger]);


  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white dark:bg-dark-color'>
      <div className=' md:relative md:w-auto md:flex md:items-center md:justify-between md:mx-12 md:mb-8 md:mt-0 md:pt-12 lg:mx-32 lg:pt-2 lg:my-6 2xl:mx-60'>
        <div className="flex m-6 mt-0 pt-10 md:p-0 justify-between items-center md:m-0">
          <Logo />
          <div ref={burgerRef} className={`tham tham-e-squeeze tham-w-8 z-10 ${activeBurger ? 'tham-active' : ''}`} onClick={toggleBurger}>
            <div className="tham-box md:hidden ">
              <div className="tham-inner bg-black dark:bg-white" />
            </div>
          </div >
        </div >
        <div ref={navRef}>
          <NavBar width={activeBurger ? 'w-3/4' : 'w-0'} onLinkClick={() => setActiveBurger(false)} />
        </div>
      </div>
      <SeparatorLine width='w-full' />
    </header>
  );
};

export default Header;  