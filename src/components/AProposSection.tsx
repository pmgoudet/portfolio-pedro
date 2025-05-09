import photo from '../assets/img/foto-apropos.jpg'

function AProposSection() {
  return (
    <section className="m-6 mb-12 md:m-12 md:mb-16 lg:mx-32 lg:mb-20 2xl:mx-60 2xl:mb-16">
      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 pt-4 md:text-4xl md:mb-8'>À Propos de Moi</h2>

      <div className='md:flex md:gap-4 dark:text-white dark:font-light'>
        <div className='pb-4 md:p-0'>
          <p className="pb-2">Franco-brésilien, installé en France et marié, je me lance dans le développement web après quelques années dans le marketing et la relation client. Passionné par la technologie, j'adore l'idée de créer des solutions pratiques et utiles pour le quotidien.
          </p>
          <p className="pb-2">Mon parcours en publicité et marketing m’a naturellement conduit vers le développement web, un domaine où je peux combiner ma créativité avec des compétences techniques en front-end.
          </p>
          <p className="pb-2">L'esthétique est pour moi essentielle : je prête attention à chaque détail, convaincu qu'une interface soignée offre une expérience utilisateur fluide et agréable.
          </p>
          <p className="pb-2">Aujourd'hui, mon objectif est de m'intégrer pleinement dans le marché du développement web et de contribuer à des projets innovants, tout en mettant à profit mon énergie, mon organisation et ma capacité d'apprentissage rapide.
          </p>
        </div>

        <img src={photo} alt="Ma Photo" className='w-64' />
      </div>
    </section>
  )
}

export default AProposSection;