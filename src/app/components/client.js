'use client'
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import LogosCarousel from "./logoscarousel";

import { clientData } from "../data/data";

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false});
import 'tiny-slider/dist/tiny-slider.css';

export default function Client(){
    const settings = {
        container: '.tiny-three-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsText: ['<span class="fas fa-chevron-circle-left"></span>', '<span class="fas fa-chevron-circle-right"></span>'],        
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,    
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
    return(
        <section className="relative md:py-24 py-16" id="review">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal mb-4">What Our Users Say</h3>

                <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
            </div>

        </div>
    </section>
    )
}