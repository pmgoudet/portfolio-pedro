import html from '../assets/icon/html-icon-hover.svg'
import css from '../assets/icon/css-icon-hover.svg'
import js from '../assets/icon/javascript-icon-hover.svg'
import php from '../assets/icon/php-icon-hover.svg'
import sql from '../assets/icon/mysql-icon-hover.svg'
import react from '../assets/icon/react-icon-hover.svg'
import tailwind from '../assets/icon/tailwind-icon-hover.svg'
import firebase from '../assets/icon/firebase.svg'
import typescript from '../assets/icon/typescript-icon-hover.svg'

import Project from "./Project";

function ProjectSection() {
  return (
    <section className="m-6 mb-12 md:m-12 md:mb-16 lg:mx-32 lg:mb-20 2xl:mx-60 2xl:mb-16 scroll-mt-[140px]" id='projets'>

      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 md:text-4xl md:mb-8'>Projets</h2>

      <div className='flex flex-col gap-12 md:flex-row md:justify-center md:flex-wrap'>

        <Project
          title="Minutos Telecom"
          subtitle="Site institutionnel responsive, optimisé pour l'expérience utilisateur."
          description="Mon premier site web réalisé en HTML, CSS et JavaScript. Conçu de A à Z, de la maquette Figma à l’intégration finale, validée et mise en ligne par le client. Site responsive suivant les bonnes pratiques d’accessibilité, de performance et de maintenabilité. Plus d’infos sur GitHub."
          img="/img/print-minutos.jpg"
          technologies={[html, css, js]}
          github='https://github.com/pmgoudet/minutos-telecom'
          site='https://minutos-telecom.vercel.app/'
        />

        <Project
          title="Portfolio Professionnel"
          subtitle="Premier portfolio axé sur l'UX/UI et le développement front-end."
          description="Projet de portfolio développé dans un but d'apprentissage, combinant React et Tailwind CSS. Forte attention portée à l'ergonomie (UX) et à l'interface utilisateur (UI) pour offrir une expérience moderne et réactive."
          img="/img/print-portfolio.jpg"
          technologies={[react, tailwind, typescript]}
          github='https://github.com/pmgoudet/portfolio-pedro'
        />

        <Project
          title="GryphIQ"
          subtitle="Projet couvrant la conception et le développement d'un site web."
          description='Développement d’un site avec gestion de connexion, création d’API, tableau filtrable, intégration Firebase et fonctionnalité de glisser-déposer. Projet ambitieux réalisé à deux, en collaboration avec Anaïs Diez (github.com/Anais-DZ), dans le cadre de mon stage d’un mois et demi.'
          img="/img/print-gryphiq.jpg"
          technologies={[react, tailwind, typescript, firebase]}
          github='https://github.com/Anais-DZ/GryphIQ'
        />


        <Project
          title="Minutos - Backend"
          subtitle='Portail sécurisé pour clients et administrateurs.'
          description="Développement d'un espace client et d'un tableau de bord admin avec authentification sécurisée et gestion CRUD selon le modèle MVC orienté objet, conçu pour être modulaire et évolutif."
          img="/img/print-minutos-back.jpg"
          technologies={[php, sql, js]}
          github='https://github.com/pmgoudet/minutos-telecom-_php' />

        <Project
          title="Focus Tomato"
          subtitle='Application de gestion du temps basée sur la méthode Pomodoro.'
          description="Application front-end pour gérer un minuteur Pomodoro avec CRUD de tâches, persistance via localStorage et glisser-déposer pour une meilleure expérience utilisateur."
          img="/img/print-focus-tomato.jpg"
          technologies={[html, css, js]}
          github='https://github.com/pmgoudet/focus-tomato'
          site='https://focus-tomato.vercel.app/' />

        <Project
          title="Mini-Portfolio Interactif"
          subtitle='Premier portfolio interactif inspiré du concept LinkTree.'
          description="Développement d'une page responsive en HTML, CSS et JavaScript pur, utilisant des data attributes pour faciliter l'interaction dynamique. Optimisé pour mobile et desktop."
          img="/img/print-linktree.jpg"
          technologies={[html, css, js]}
          github='https://github.com/pmgoudet/LinkTree'
          site='https://pmgoudet.vercel.app/' />

      </div>
    </section>
  )
}

export default ProjectSection;