// import React from 'react';
import iconHtml from '../assets/icon/html-icon-hover.svg'
import iconCss from '../assets/icon/css-icon-hover.svg'
import iconJs from '../assets/icon/javascript-icon-hover.svg'
import Button from './Button'

type ProjectProps = {
  title: string;
  subtitle: string;
  // description: string;
  // img: string;
  // technologies: Array<string>;
}

const Project = ({ title, subtitle, description, img, technologies }: ProjectProps) => {

  const icons: string[] = [iconHtml, iconCss, iconJs]

  return (
    <section>
      <h2 className='text-2xl font-semibold p-6 pb-2'>Projets</h2>
      <div className="m-6 shadow-lg">

        <div className="relative w-full h-40 group overflow-hidden box-border bg-[url(/img/print-minutos.jpg)] bg-cover">

          <div className="absolute inset-0 bg-black bg-opacity-90 flex text-white opacity-0 group-hover:opacity-100 transition-opacity p-2">
            Seu Texto Aqui ta ligado barato é loco eh nois correndo pelo certo irmao
          </div>
        </div>

        <div className="p-2">
          <h3 className="text-lg font-semibold pb-2">{title}</h3>
          <div className='flex gap-2 '>
            <p className="text-base">{subtitle}</p>
            <div className='flex gap-2 pr-2 flex-wrap'>
              {icons.map((icon) => (
                <img src={icon} alt={`Logo ${icon}`} className='w-4' />
              ))}
            </div>
          </div>
          <div className='flex gap-4 mb-2 mt-4'>
            <Button variant="primary-sm">Voir sur GitHub</Button>
            <Button>Voir le site</Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;