import { useEffect, useState } from 'react';
import logoLight from '../assets/img/logo-fundoclaro.svg';
import logoDark from '../assets/img/logo-fundoescuro.svg';

const Logo = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    // Define estado inicial
    setIsDark(html.classList.contains('dark'));

    // Observa mudanças na classe do <html>
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect(); // limpa o observer ao desmontar
  }, []);

  return (
    <img
      src={isDark ? logoDark : logoLight}
      alt="Logotipo Pedro Goudet"
      className='w-xl md:w-40 cursor-pointer'
    />
  );
};

export default Logo;