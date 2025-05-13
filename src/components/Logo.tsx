import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Importe o Link do react-scroll
import logoLight from '../assets/img/logo-fundoclaro.svg';
import logoDark from '../assets/img/logo-fundoescuro.svg';

const Logo = () => {
  //1) Variável pra saber se isDark
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    //2) Pegar o HTML
    const html = document.documentElement;

    //3) Definir estado inicial do HTML
    setIsDark(html.classList.contains('dark'));

    //4) Observa mudanças na classe do <html> pq o useState não faz isso
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    //5) Settings do observer: attributes fica de olho na alteração dos atributos, filter diz que o único atributo que interessa é o "class"
    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    //6) se eu tiro o elemento ele apaga a memória junto pra evitar espaço ocupado à toa
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
    >
      <img
        src={isDark ? logoDark : logoLight}
        alt="Logotipo Pedro Goudet"
        className="w-40 md:w-40 cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
