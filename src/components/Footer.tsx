import logoWhite from '../assets/img/logo-branco.svg'

function Footer() {
  return (
    <footer className='bg-gradient-primary pt-8 pb-4 md:p-12 md:pb-4 lg:px-32 2xl:px-60'>
      <div className='flex flex-col text-white gap-4 md:flex-row items-center justify-between'>
        <div>
          <button className='flex items-center gap-2 border-2 border-white m-auto p-3 px-8 rounded-md mb-4 md:mb-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            CV
          </button>
        </div>
        <div className='flex flex-col lg:flex-row md:gap-2 lg:gap-10'>
          <div className='flex items-center gap-2 m-auto' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <p><a href='mailto:pmgoudet@gmail.com'>pmgoudet@gmail.com</a></p>
          </div>
          <div className='flex items-center gap-2 m-auto' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p>Toulouse - France</p>
          </div>
        </div>
        <img src={logoWhite} alt="Logo Pedro Goudet" className='h-10 mt-4 md:mt-0' />
      </div>

      <p className='text-sm text-center italic mt-8 text-white font-thin '>©2025 Tous droits réservés</p>
    </footer>
  )
}

export default Footer;