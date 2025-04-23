import arrow from '../assets/icon/scroll-down.svg';

function ArrowDown() {
  return (
    <div className="flex justify-center m-0 lg:my-8">
      <img src={arrow} alt="Arrow Down" className="h-10 animate-bounce hidden lg:block" />
    </div>
  );
}

export default ArrowDown;