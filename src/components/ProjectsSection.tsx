import html from '../assets/icon/html-icon-hover.svg'
import css from '../assets/icon/css-icon-hover.svg'
import js from '../assets/icon/javascript-icon-hover.svg'
import php from '../assets/icon/php-icon-hover.svg'
import sql from '../assets/icon/mysql-icon-hover.svg'
import react from '../assets/icon/react-icon-hover.svg'
import tailwind from '../assets/icon/tailwind-icon-hover.svg'

import Project from "./Project";

function ProjectSection() {
  return (
    <section className="m-6 md:m-12">

      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 md:text-4xl md:mb-8'>Projets</h2>

      <div className='flex flex-col gap-12 md:flex-row md:justify-center md:flex-wrap'>

        <Project
          title="Minutos Telecom"
          subtitle="Site institutionnel responsive et optimisé."
          description="Développement front-end responsive avec CSS modulaire, intégration d'APIs, validation de formulaires et optimisation SEO, en privilégiant l’accessibilité et la maintenance."
          img="/img/print-minutos.jpg"
          technologies={[html, css, js]} />

        <Project
          title="Minutos Telecom - Backend"
          subtitle='Portail sécurisé pour clients et administrateurs.'
          description="Développement d'un espace client et d'un tableau de bord administrateur avec authentification sécurisée. Gestion complète des utilisateurs et des administrateurs via des opérations CRUD, conforme au modèle MVC orienté objet. Projet conçu pour garantir modularité, évolutivité et maintenabilité."
          img="/img/print-minutos-back.jpg"
          technologies={[php, sql, js]} />

        <Project
          title="Focus Tomato"
          subtitle='Application de gestion du temps basée sur la méthode Pomodoro.'
          description="Création d'une application front-end réactive permettant de démarrer, mettre en pause et réinitialiser un minuteur Pomodoro. Gestion complète des tâches (CRUD), persistance des données avec localStorage, utilisation de data attributes, et fonctionnalités de glisser-déposer pour une meilleure expérience utilisateur."
          img="/img/print-focus-tomato.jpg"
          technologies={[html, css, js]} />

        <Project
          title="Mini-portfolio interactif"
          subtitle='Premier portfolio interactif inspiré du concept LinkTree.'
          description="Développement d'une page responsive en HTML, CSS et JavaScript pur, utilisant des data attributes pour faciliter l'interaction dynamique. Optimisé pour mobile et desktop."
          img="/img/print-linktree.jpg"
          technologies={[html, css, js]} />

        <Project
          title="Portfolio professionnel"
          subtitle="Premier portfolio axé sur l'UX/UI et le développement front-end."
          description="Projet de portfolio développé dans un but d'apprentissage, combinant React et Tailwind CSS. Forte attention portée à l'ergonomie (UX) et à l'interface utilisateur (UI) pour offrir une expérience moderne et réactive."
          img="/img/print-portfolio.jpg"
          technologies={[react, tailwind]} />

      </div>


    </section>
  )
}

export default ProjectSection;