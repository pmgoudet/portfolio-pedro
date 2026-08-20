import css from '../assets/icon/css-icon-hover.svg';
import express from '../assets/icon/express-icon.svg';
import firebase from '../assets/icon/firebase.svg';
import html from '../assets/icon/html-icon-hover.svg';
import js from '../assets/icon/javascript-icon-hover.svg';
import node from '../assets/icon/node-icon.svg';
import php from '../assets/icon/php-icon-hover.svg';
import react from '../assets/icon/react-icon-hover.svg';
import sql from '../assets/icon/mysql-icon-pequeno.svg';
import tailwind from '../assets/icon/tailwind-icon-hover.svg';
import typescript from '../assets/icon/typescript-icon-hover.svg';
import zip from '../assets/icon/zip-icon.png';
import composer from '../assets/icon/composer-icon.svg';
import excel from '../assets/icon/excel-icon.svg';

import Project from "./Project";

function ProjectSection() {
  return (
    <section className="m-6 mb-12 md:m-12 md:mb-16 lg:mx-32 lg:mb-20 2xl:mx-60 2xl:mb-16 scroll-mt-[140px]" id='projets'>

      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 md:text-4xl md:mb-8'>Projets</h2>

      <div className='flex flex-col gap-12 md:flex-row md:justify-center md:flex-wrap'>


        <Project
          title="Minutos Telecom – Refonte React/Node"
          subtitle="Refonte full-stack avec authentification sécurisée par JWT (en cours)."
          description="Backend Node.js/Express (API RESTful, MySQL) en architecture par couches : JWT, rôles et autorisations, hachage bcrypt, soft delete. Frontend React en cours de connexion aux endpoints. Projet personnel mené en autonomie, pensé comme terrain d'apprentissage réel."
          img="/img/print-minutos-node-react.webp"
          technologies={[react, node, express, sql]}
          github='https://github.com/pmgoudet/minutos-telecom-node_react'
          site='https://minutos-telecom-react.vercel.app/'
        />

        <Project
          title="Minutos Telecom"
          subtitle="Site institutionnel responsive, optimisé pour l'expérience utilisateur."
          description="Mon premier site web réalisé en HTML, CSS et JavaScript. Conçu de A à Z, de la maquette Figma à l’intégration finale, validée et mise en ligne par le client. Site responsive suivant les bonnes pratiques d’accessibilité, de performance et de maintenabilité. Plus d’infos sur GitHub."
          img="/img/print-minutos.webp"
          technologies={[html, css, js]}
          github='https://github.com/pmgoudet/minutos-telecom'
          site='https://minutos-telecom.vercel.app/'
        />

        <Project
          title="Minutos Telecom - Backend en PHP"
          subtitle='Portail sécurisé pour clients et administrateurs.'
          description="Développement d'un espace client et d'un tableau de bord admin avec authentification sécurisée et gestion CRUD, structuré selon le modèle MVC orienté objet, base de données SQL."
          img="/img/print-minutos-back.webp"
          technologies={[php, sql, js]}
          github='https://github.com/pmgoudet/minutos-telecom-backoffice'
        />

        <Project
          title="Portfolio Professionnel"
          subtitle="Premier portfolio axé sur l'UX/UI et le développement front-end."
          description="Projet de portfolio développé dans un but d'apprentissage, combinant React, TypeScript et Tailwind CSS. Forte attention portée à l'ergonomie (UX) et à l'interface utilisateur (UI) pour offrir une expérience moderne et réactive."
          img="/img/print-portfolio.webp"
          technologies={[react, tailwind, typescript]}
          github='https://github.com/pmgoudet/portfolio-pedro'
        />

        <Project
          title="Convertisseur TIFF → PDF"
          subtitle="Automatisation par lot avec catalogage Excel."
          description="Script PHP en ligne de commande : conversion TIFF vers PDF via Imagick, gestion individuelle des erreurs, catalogue Excel généré (PhpSpreadsheet), export final compressé en ZIP."
          img="/img/print-converter-tif-pdf.webp"
          technologies={[php, excel, zip]}
          github='https://github.com/pmgoudet/converter-tif-pdf'
        />

        <Project
          title="Music List Exporter"
          subtitle="Analyse récursive d'une bibliothèque musicale et export vers Excel."
          description="Projet personnel réalisé par curiosité afin d'approfondir mes compétences en PHP. Il parcourt récursivement une bibliothèque musicale, détecte les fichiers MP3, élimine les doublons, identifie les fichiers ne respectant pas le format attendu et génère un rapport Excel structuré avec plusieurs onglets."
          img="/img/print-music-list.webp"
          technologies={[php, composer, excel]}
          github='https://github.com/pmgoudet/Excel-Music-List'
        />

        <Project
          title="GryphIQ"
          subtitle="Projet couvrant la conception et le développement d'un site web."
          description='Développement d’un site avec gestion de connexion, création d’API, tableau filtrable, intégration Firebase et fonctionnalité de glisser-déposer. Projet ambitieux réalisé à deux, en collaboration avec Anaïs Diez (github.com/Anais-DZ), dans le cadre de mon stage d’un mois et demi.'
          img="/img/print-gryphiq.webp"
          technologies={[react, tailwind, typescript, firebase]}
          github='https://github.com/Anais-DZ/GryphIQ'
        />


        <Project
          title="Focus Tomato"
          subtitle='Application de gestion du temps basée sur la méthode Pomodoro.'
          description="Application front-end pour gérer un minuteur Pomodoro avec CRUD de tâches, persistance via localStorage et glisser-déposer pour une meilleure expérience utilisateur."
          img="/img/print-focus-tomato.webp"
          technologies={[html, css, js]}
          github='https://github.com/pmgoudet/focus-tomato'
          site='https://focus-tomato.vercel.app/' />


        {/* <Project
          title="Mini-Portfolio Interactif"
          subtitle='Premier portfolio interactif inspiré du concept LinkTree.'
          description="Développement d'une page responsive en HTML, CSS et JavaScript pur, utilisant des data attributes pour faciliter l'interaction dynamique. Optimisé pour mobile et desktop."
          img="/img/print-linktree.webp"
          technologies={[html, css, js]}
          github='https://github.com/pmgoudet/LinkTree'
          site='https://pmgoudet.vercel.app/' /> */}

      </div>
    </section>
  )
}

export default ProjectSection;