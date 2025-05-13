import { Link } from 'react-scroll'; // Importe o Link do react-scroll
import arrow from '../assets/icon/scroll-down.svg';

function ArrowUp() {
  return (
    <div className="flex justify-end m-0 lg:mx-20 2xl:mx-52">
      <Link
        to="hero"
        smooth={true}
        duration={500}
      >
        <img
          src={arrow}
          alt="Arrow Down"
          className="h-10 hidden lg:block transform rotate-180 cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default ArrowUp;
