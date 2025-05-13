import arrow from '../assets/icon/scroll-down.svg';

function ArrowUp() {

  return (
    <div className="flex justify-end m-0 lg:mx-20 2xl:mx-52">
      <a href="#hero"><img src={arrow} alt="Arrow Down" className="h-10 hidden lg:block transform rotate-180 cursor-pointer" /></a>
    </div>
  );
}

export default ArrowUp;