import Project from "./Project";

function ProjectSection() {
  return (
    <section className="m-6">
      <h2 className='text-2xl font-semibold text-gradient-primary mb-4'>Projets</h2>
      <Project
        title="Minutos Telecom"
        subtitle="Site institutionnel responsive et optimisé." description="Développement front-end responsive avec CSS modulaire, intégration d'APIs, validation de formulaires et optimisation SEO, en privilégiant l’accessibilité et la maintenance."
        img="/img/print-minutos.jpg" />
    </section>
  )
}

export default ProjectSection;