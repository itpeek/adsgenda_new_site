import { useEffect, useRef } from 'react';
import { customerData } from "../data/data";
import Image from "next/image";

const LogosCarousel = () => {
  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {customerData.map((item, index) => {
          return (
            <li key={index}>
              <Image src={item.image} alt={`adsgenda`} width={150} height={150} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LogosCarousel;
