import { useEffect, useState } from 'react';
import logoLight from '../assets/img/logo-fundoclaro.svg';
import logoDark from '../assets/img/logo-fundoescuro.svg';


const Logo = () => {
  //1) Variável pra saber se isDark
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    //2) Pegar o HTML
    const html = document.documentElement;

    //3) Definr estado inicial do HTML
    setIsDark(html.classList.contains('dark'));

    //4) Observa mudanças na classe do <html> pq o useState não faz isso
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    //5) Settings do observer: attributes fica de olho na alteração dos atribtos, filter diz que o unico atributo que interessa é o "class"
    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class'],
    });

    //6) se eu tiro o elemento ele apaga a memoria junto pra evitar espaco ocupado à toa
    return () => observer.disconnect();
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