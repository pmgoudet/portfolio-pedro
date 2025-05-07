import html from '../assets/icon/html-icon-hover.svg'
import css from '../assets/icon/css-icon-hover.svg'
import js from '../assets/icon/javascript-icon-hover.svg'
import php from '../assets/icon/php-icon-hover.svg'
import sql from '../assets/icon/mysql-icon-hover.svg'

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
          title="Focus Tomato"
          subtitle='Gestion du temps avec la méthode Pomodoro.'
          description='Site web front-end avec des fonctionnalités telles que démarrage e pause du minuteur, gestion des tâches (CRUD), sauvegarde dans le localStorage, utilisation de data attributes et drag-and-drop.'
          img="/img/print-focus-tomato.jpg"
          technologies={[html, css, js]} />

        <Project
          title="Minutos Telecom - Backend"
          subtitle='Espace client et espace administrateur du site.'
          description="Projet en cours de développement. Connexion et modification des données personnelles par les clients, accès administrateur aux utilisateurs et à d'autres administrateurs, avec gestion complète via la méthode CRUD. Construit en architecture MVC orientée objet."
          img="/img/print-minutos-back.jpg"
          technologies={[php, sql, js]} />

        <Project
          title="Focus Tomato"
          subtitle='Gestion du temps avec la méthode Pomodoro.'
          description='Site web front-end avec des fonctionnalités telles que démarrage e pause du minuteur, gestion des tâches (CRUD), sauvegarde dans le localStorage, utilisation de data attributes et drag-and-drop.'
          img="/img/print-focus-tomato.jpg"
          technologies={[html, css, js]} />

      </div>


    </section>
  )
}

export default ProjectSection;