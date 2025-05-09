import Skills from "./Skills";

function SkillsSection() {
  return (
    <section className="m-6 mb-12 md:m-12 md:mb-16 lg:mx-32 lg:mb-20 2xl:mx-60 2xl:mb-16">
      <h2 className='text-2xl font-semibold text-gradient-primary mb-4 pt-4 md:text-4xl md:mb-8 xl:mb-16'>Compétences techniques</h2>

      <div className="lg:max-w-[930px] lg:m-auto xl:max-w-[980px]">
        <Skills />
      </div>

    </section>
  )
}

export default SkillsSection;