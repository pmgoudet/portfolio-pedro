import Button from "./Button";
import SocialIcons from "./SocialIcons";
import ArrowDown from "../components/ArrowDown";
import imgHome from '../assets/img/img-home.webp';


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
            <h2 className="text-lg mb-6 dark:text-white md:text-3xl md:mt-4 lg:text-2xl">Étudiant en informatique — CNAM Toulouse</h2>
            <p className="dark:text-white leading-7 dark:font-light text-sm md:text-xl/8 lg:text-sm/7 2xl:text-base/7 lg:w-lg">Reconverti vers le développement après une Licence en publicité et marketing, je poursuis une Licence Informatique au <strong><a href="https://ipst.cnam.fr/">CNAM de Toulouse</a></strong>, en alternance chez <strong><a href="https://www.xelians.com/">Xelians Digital</a></strong> à partir de septembre 2026.
            </p>
            <p className="dark:text-white leading-7 dark:font-light text-sm md:text-xl/8 lg:text-sm/7 2xl:text-base/7 lg:w-lg"> Curieux et autonome, <strong>j'apprends en résolvant de vrais problèmes</strong> — sécuriser une authentification, structurer une API, automatiser un traitement de fichiers. Ma formation en communication m'aide à traduire un besoin flou en solution technique concrète.
            </p>
          </div>
          <div className="mt-6 flex justify-between md:justify-normal md:gap-12 md:mt-10 lg:mt-8">
            <Button children='Contactez-moi' onClick={contactezMoi} />
            <Button children='Mon CV' variant="secondary" onClick={downloadCV} />
          </div>
          <SocialIcons showOnMobile={false} />
        </div>
        <div className="p-4 mt-6 md:w-3/4 md:mt-10 ml-auto lg:w-1/2 lg:p-0 lg:m-0 xl:p-20 xl:pr-0">
          <img src={imgHome} alt="Image Home" className='w-full' />
        </div>
      </div>
      <ArrowDown />
    </div>

  )
}

export default Hero;