import { useState, useEffect, useRef } from 'react';
import { customerData } from "../data/data";
import Image from "next/image";

const LogosCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const logoRef = useRef(null);

  // Manage the animation based on the hover/click state
  useEffect(() => {
    const ul = logoRef.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause animation on hover
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume animation when hover is removed
  };

  const handleClick = () => {
    setIsPaused(true); // Pause animation on click
  };

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <ul
        ref={logoRef}
        className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${isPaused ? 'pause-animation' : 'animate-infinite-scroll'}`}
      >
        {customerData.map((item, index) => {
          return (
            <li key={index}>
              <Image src={item.image} alt={`Logo ${index + 1}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LogosCarousel;
