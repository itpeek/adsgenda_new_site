import { useEffect, useRef } from 'react';

const LogosCarousel = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    ul.insertAdjacentHTML('afterend', ul.outerHTML);
    ul.nextSibling.setAttribute('aria-hidden', 'true');
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
        <div className='w-full max-w-5xl mx-auto px-4 md:px-6 py-24'>
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src="./facebook.svg" alt="Facebook" />
        </li>
        <li>
          <img src="./disney.svg" alt="Disney" />
        </li>
        <li>
          <img src="./airbnb.svg" alt="Airbnb" />
        </li>
        <li>
          <img src="./apple.svg" alt="Apple" />
        </li>
        <li>
          <img src="./spark.svg" alt="Spark" />
        </li>
        <li>
          <img src="./samsung.svg" alt="Samsung" />
        </li>
        <li>
          <img src="./quora.svg" alt="Quora" />
        </li>
        <li>
          <img src="./sass.svg" alt="Sass" />
        </li>
      </ul>
    </div>
    </div>
  );
};

export default LogosCarousel;
