import HomeImg from "./HomeImg";
import Button from "./Button";
import SocialIcons from "./SocialIcons";
import ArrowDown from "../components/ArrowDown";


function Hero() {

  const contactezMoi = () => {
    const section = document.getElementById("contact");
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 94;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/docs/CV-PedroGoudet.pdf';
    link.download = 'CV-PedroGoudet.pdf';
    link.click();
  }

  return (
    <div id='hero'>
      <div className="m-8 pt-24 md:m-12 md:pt-28 lg:pt-32 lg:mt-0 lg:mx-32 lg:mb-4 lg:flex lg:gap-16 lg:items-center lg:w-auto 2xl:mx-60 2xl:mb-20 2xl:pt-44">
        <div className="lg:w-1/2">
          <div>
            <p className="text-2xl font-semibold dark:text-white md:text-4xl lg:text-3xl">Bonjour, je suis</p>
            <h1 className="text-4xl font-bold text-gradient-primary mb-2 md:text-6xl lg:text-5xl">Pedro Goudet</h1>
            <h2 className="text-lg mb-6 dark:text-white md:text-3xl md:mt-4 lg:text-2xl">Développeur Frontend</h2>
            <p className="dark:text-white leading-7 dark:font-light text-sm md:text-xl/8 lg:text-sm/7 2xl:text-base/7 lg:w-lg">Titulaire d’une Licence en publicité et marketing et actuellement en fin de formation en Développement Web et Web mobile (RNCP niv. 5), je prépare une formation de Concepteur Développeur d’Applications (Titre professionnel de niveau 6 – Bac+3/4) <strong>en alternance, à partir d’octobre 2025</strong> .</p>
            <p className="dark:text-white leading-7 dark:font-light text-sm md:text-xl/8 lg:text-sm/7 2xl:text-base/7 lg:w-lg"> <strong>Je recherche une entreprise</strong> où je pourrai renforcer mes compétences techniques tout en mettant à profit ma sensibilité à la communication et à l’expérience utilisateur.
            </p>
          </div>
          <div className="mt-6 flex justify-between md:justify-normal md:gap-12 md:mt-10 lg:mt-8">
            <Button children='Contactez-moi' onClick={contactezMoi} />
            <Button children='Mon CV' variant="secondary" onClick={downloadCV} />
          </div>
          <SocialIcons showOnMobile={false} />
        </div>
        <div className="p-4 mt-6 md:w-3/4 md:mt-10 ml-auto lg:w-1/2 lg:p-0 lg:m-0 xl:p-20 xl:pr-0">
          <HomeImg />
        </div>
      </div>
      <ArrowDown />
    </div>

  )
}

export default Hero;