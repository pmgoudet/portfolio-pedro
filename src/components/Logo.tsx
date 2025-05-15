import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logoLight from '../assets/img/logo-fundoclaro.svg';
import logoDark from '../assets/img/logo-fundoescuro.svg';

const Logo = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Link para SEO que fica escondido */}
      <a href="#hero" className="sr-only">Aller à la section héros</a>

      {/* Link react-scroll para UX */}
      <Link to="hero" smooth={true} duration={500} className="cursor-pointer inline-block">
        <img
          src={isDark ? logoDark : logoLight}
          alt="Logotipo Pedro Goudet"
          className="w-40 md:w-40"
        />
      </Link>
    </>
  );
};

export default Logo;
