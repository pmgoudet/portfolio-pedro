// import React from 'react';
import iconDownArrow from '../assets/icon/arrow-down.svg'
import Button from './Button'
import { useState, useRef, useEffect } from 'react';

type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  technologies: Array<string>;
}

const Project = ({ title, subtitle, description, img, technologies }: ProjectProps) => {

  const icons: string[] = technologies;

  const [openProject, setOpenProject] = useState<boolean>(false)

  const onOpenProject = () => {
    setOpenProject(!openProject)
  }

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (projectRef.current && !projectRef.current.contains(event.target as Node)) {
        setOpenProject(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="shadow-xl md:w-[45%] lg:w-1/4">
      {/* HOVER */}
      <div className={`relative w-full h-40 group overflow-hidden box-border bg-cover`} style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 hidden lg:flex">
          <p>{description}</p>
        </div>
      </div>
      <div className=" bg-white relative">
        <div className=''>
          <div className='flex justify-between items-center'>
            <h3 className="p-2 text-lg font-semibold">{title}</h3>
            <div className='p-2 flex gap-2 justify-end items-end '>
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt={`Logo ${icon}`} className='w-4' />
              ))}
            </div>
          </div>
          <div className='flex items-end justify-between gap-4 mt-2 '>
            <p className="text-base px-2 pb-2">{subtitle}</p>
            <img src={iconDownArrow} alt="Arrow Down Icon" onClick={onOpenProject} className={`transition-transform duration-500 p-2  ${openProject ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>
        </div>
        {/* HIDDEN DIV */}
        <div ref={projectRef} className={`absolute overflow-hidden transition-all duration-500 p-2 z-10 shadow-xl border-t-white bg-white ${openProject ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className='mb-2'>{description}</p>
          <div className='flex gap-4 justify-end '>
            <Button variant="primary-sm">GitHub</Button>
            <Button variant='secondary-sm'>Site</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;