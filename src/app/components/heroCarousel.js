'use client'
import React from "react"
import Link from "next/link"
import Typist from 'react-text-typist'
import { Carousel } from 'react-responsive-carousel';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LineCta from "./lineCta";

export default function HeroCarousel(){
    return(
        <section className="swiper-slider-hero relative block h-[800px]" id="home">
        <div className="swiper-container absolute end-0 top-0 w-full h-full bg-[url(/images/bg/BG.jpg)] bg-cover">
            <Carousel className="swiper-wrapper h-screen" showStatus={false} showThumbs={false} showArrows={false} interval={false} showIndicators={false}>
                <div className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;">
                                                 
                    </div>
                </div> 

            </Carousel>
        </div>
    </section>
    )
}