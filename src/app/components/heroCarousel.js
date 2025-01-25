'use client'
import React from "react"
import Link from "next/link"
import Typist from 'react-text-typist'
import { Carousel } from 'react-responsive-carousel';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LineCta from "./lineCta";

export default function HeroCarousel(){
    return(
        <section className="swiper-slider-hero relative block h-screen" id="home">
        <div className="swiper-container absolute end-0 top-0 w-full h-full">
            <Carousel className="swiper-wrapper h-screen" showStatus={false} showThumbs={false} showArrows={false} interval={false} showIndicators={false}>
                <div className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src="/images/bg/240625.mp4"
                            autoPlay
                            loop
                            muted
                        />                            
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="container relative">
                            <div className="grid grid-cols-1">
                                <div className="text-left">
                                <p className="text-white/70 lg:leading-normal text-lg max-w-xl mb-3">Adsgenda One Stop Service Agency</p>                                    
                                    <h1 className="font-bold lg:leading-none leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white">เราพร้อมซัพพอร์ต</h1>
                                    <h2 className="lg:leading-none leading-none tracking-wide text-4xl lg:text-5xl capitalize text-white">
                                    <Typist
                                        className="typewrite capitalize"
                                        sentences={[
                                            'งานของคุณ',
                                            'กิจกรรมของคุณ',
                                            'ทุกเป้าหมายของคุณ',
                                        ]}
                                        typingSpeed={2500}
                                        deletingSpeed={500}
                                        showCursor={true}
                                        startDelay={100}
                                        cursorSmooth
                                        pauseTime={2500}
							        ></Typist>
                                                                      
                                    </h2>
                                    
                                    <div className="mt-6">
                                        <LineCta href="https://line.me" text="ติดต่อเรา" fontSize="text-xl" />
                                    </div>
                                </div>                        
                            </div>
                        </div>
                    </div>
                </div> 

            </Carousel>
        </div>
    </section>
    )
}