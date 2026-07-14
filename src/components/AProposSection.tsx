import photo from '../assets/img/eu.webp'

function AProposSection() {
  return (
    <section className="m-6 mb-12 md:m-12 md:mb-16 lg:mx-32 lg:mb-20 2xl:mx-60 2xl:mb-16 scroll-mt-[140px]" id='a-propos'>
      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 pt-4 md:text-4xl md:mb-8'>À Propos de Moi</h2>

      <div className='md:flex md:gap-4 md:items-start lg:gap-16 2xl:w-3/4 lg:m-auto lg:p-8 dark:text-white dark:font-light'>
        <div className='pb-4 md:p-0'>
          <p className="pb-2">Franco-brésilien installé en France, je me suis tourné vers le développement après plusieurs années en marketing et relation client — une transition qui m'a appris à écouter un besoin avant de proposer une solution.
          </p>
          <p className="pb-2">J'aime autant la logique du back-end que le soin du détail visuel : j'ai conçu et développé plusieurs projets de bout en bout, du design à l'implémentation, en passant par ce portfolio lui-même. Mon expérience en communication m'aide à traduire un besoin flou en interface claire et en solution technique fiable.
          </p>
          <p className="pb-2">Mon objectif aujourd'hui : <strong>continuer à apprendre</strong> au contact de vrais projets, et découvrir la direction technique qui me correspond le mieux.
          </p>
        </div>

        <img src={photo} alt="Ma Photo" className='w-72 m-auto' />
      </div>
    </section>
  )
}

export default AProposSection;