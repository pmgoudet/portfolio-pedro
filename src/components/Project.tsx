// import React from 'react';
import html from '../assets/icon/html-icon-hover.svg'
import css from '../assets/icon/css-icon-hover.svg'
import js from '../assets/icon/javascript-icon-hover.svg'
import iconDownArrow from '../assets/icon/arrow-down.svg'
import Button from './Button'
import { useState } from 'react'

type ProjectProps = {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  // technologies: Array<string>;
}

const Project = ({ title, subtitle, description, img, technologies }: ProjectProps) => {

  const icons: string[] = [html, css, js]

  const [openProject, setOpenProject] = useState<boolean>(false)

  const onOpenProject = () => {
    setOpenProject(!openProject)
  }

  return (
    <div className="shadow-lg max-w-96 ">

      {/* HOVER */}
      <div className={`relative w-full h-40 group overflow-hidden box-border bg-[url(${img})] bg-cover`}>
        <div className="absolute inset-0 bg-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 hidden lg:flex">
          <p>{description}</p>
        </div>
      </div>

      <div className="p-2 bg-white">
        <div className=''>
          <div className='flex justify-between items-center'>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className='flex gap-2 pr-2 justify-end items-end '>
              {icons.map((icon, index) => (
                <img key={index} src={icon} alt={`Logo ${icon}`} className='w-4' />
              ))}
            </div>
          </div>

          <div className='flex items-end justify-between gap-4 mt-2'>
            <p className="text-base">{subtitle}</p>
            <img src={iconDownArrow} alt="Arrow Down Icon" onClick={onOpenProject} className={`transition-transform duration-500 ${openProject ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>
        </div>

        {/* HIDDEN DIV */}
        <div className={`w-full mt-4 overflow-hidden transition-all duration-500 ${openProject ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className='mb-2'>{description}</p>
          <div className='flex gap-4 justify-end'>
            <Button variant="primary-sm">GitHub</Button>
            <Button variant='secondary-sm'>Site</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project;