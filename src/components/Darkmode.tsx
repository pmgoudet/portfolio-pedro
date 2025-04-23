import lightModeIcon from '../assets/icon/lightmode.svg'
import darkModeIcon from '../assets/icon/darkmode.svg'
import { useState } from 'react'


function Darkmode() {

  const [darkModeOn, setDarkModeOn] = useState(false)
  const html = document.documentElement;


  const toggleDarkMode = () => {
    setDarkModeOn(!darkModeOn)
    if (darkModeOn) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  }

  return (
    <img className='ml-auto mt-20 md:m-0 cursor-pointer duration-150 lg:hover:opacity-70' title="DarkMode On/Off" src={darkModeOn ? lightModeIcon : darkModeIcon} alt="DarkMode Icon" onClick={toggleDarkMode} />
  )
}

export default Darkmode;