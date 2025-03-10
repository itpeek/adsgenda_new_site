"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Typist from 'react-text-typist'
import Link from "next/link";

const slides = [
  {
    id: 1,
    leftTop: "/images/bg/ensen-website_08.png",
    leftBottom: "/images/bg/ensen-website_02.png",
    screen: "/images/bg/ensen-website_05.png",
  },
  {
    id: 2,
    leftTop: "/images/bg/adeka_11.png",
    leftBottom: "/images/bg/adeka_02.png",
    screen: "/images/bg/adeka_08.png",
    bg_color:"#fff",
  },
];

const GsapSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const leftTopRef = useRef(null);
  const leftBottomRef = useRef(null);
  const screenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Slide ซ้ายบน (ซ้าย → ขวา)
    tl.fromTo(
      leftTopRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Slide ซ้ายล่าง (ขวา → ซ้าย)
    tl.fromTo(
      leftBottomRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    );

    // Slide หน้าจอใน Mockup (บน → ล่าง)
    tl.fromTo(
      screenRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, ease: "power2.out" },
      "-=0.8"
    );
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
<div className="h-[950px] relative w-full mx-auto overflow-hidden">
    <div className="relative pt-[120px] pb-6 z-3 text-center">                                
    <h1 className="font-bold lg:leading-none leading-normal tracking-wide text-4xl lg:text-[35px] capitalize text-white">บริหารธุรกิจของคุณด้วยมือถือเครื่องเดียว</h1>
    <p className="pt-4 text-lg text-white">รับทำเว็บไซต์ ออกแบบเว็บไซต์ ใช้งานง่าย ในมือถือ หน้าบ้านสวย หลังบ้านใช้งานง่าย</p>
    <h2 className="pt-6 lg:leading-none leading-none tracking-wide text-4xl lg:text-5xl capitalize text-white">
    <Typist
        className="typewrite capitalize"
        sentences={[
            'รองรับ SEO',
            'รองรับ API',
            'E-Commerce',
            'พร้อมต่อยอดเว็บไซต์',
        ]}
        typingSpeed={2500}
        deletingSpeed={500}
        showCursor={true}
        startDelay={100}
        cursorSmooth
        pauseTime={2500}
    ></Typist>                     
        </h2>
    </div>      
        {slides.map((slide, index) => (
            <div key={index}>
        <div className="absolute left-0 right-0 h-full w-full grid grid-cols-12 gap-[30px] m-auto">            
          <div
            className={`z-2 absolute w-full h-full grid grid-cols-12 lg:px-36 gap-[30px] ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            {/* กลุ่มภาพด้านซ้าย */}
            <div className="hidden col-span-7 lg:flex flex-wrap gap-[60px]">
              <div className="flex items-end">
                <img
                  ref={index === currentIndex ? leftTopRef : null}
                  src={slide.leftTop}
                />
              </div>
              <div className="hidden lg:flex items-start mt-[60px]">
                <img
                  ref={index === currentIndex ? leftBottomRef : null}
                  src={slide.leftBottom}
                />
              </div>
            </div>

            {/* iMac Mockup */}
            <div className="relative col-span-12 lg:col-span-5 flex flex-wrap justify-center"> 
            <div className="hidden lg:flex flex-col gap-[30px] items-center justify-center mt-6 mb-0">
                <h2 className="text-[42px] text-white"><small>เริ่มต้นเพียง</small> 15,000 <small>บาท</small></h2>
                <Link
                href={"https://line.me/R/ti/p/@352tegsj"}
                target="_blank"
                className={`gap-1 h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#1F806E] text-white`} >
                    เริ่มต้นสร้างเว็บไซต์ของคุณ
                </Link>
            </div>
              <div className="overflow-hidden relative">
                <img className="overflow-hidden relative lg:w-[711px] lg:h-[500px] z-2" src="/images/bg/imac-mockup.png" />
                <img
                  ref={index === currentIndex ? screenRef : null}
                  className="absolute top-0 lg:h-[380px] p-2 lg:p-4 z-1"
                  src={slide.screen}
                />
              <div className="lg:hidden text-center flex-col gap-[30px] items-center justify-center mt-6 mb-0">
                <h2 className="text-[36px] lg:text-[42px] my-6 mt-12 text-white"><small>เริ่มต้นเพียง</small> 15,000 <small>บาท</small></h2>
                <Link
                href={"https://line.me/R/ti/p/@352tegsj"}
                target="_blank"
                className={`gap-1 h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#1F806E] text-white`} >
                    เริ่มต้นสร้างเว็บไซต์ของคุณ
                </Link>
            </div>                 
              </div>             
            </div>
          </div>
          </div>
          <div className={`z-1 absolute left-0 right-0 bottom-0 top-0 bg-[url(/images/bg/BG.jpg)] bg-cover`}>
          </div>
          </div>         
        ))}

      {/* ปุ่ม Previous */}
      <button
        onClick={prevSlide}
        className="absolute z-3 left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full"
      >
        <IoIosArrowBack size={30} />
      </button>

      {/* ปุ่ม Next */}
      <button
        onClick={nextSlide}
        className="absolute z-3 right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full"
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
  );
};

export default GsapSlider;
