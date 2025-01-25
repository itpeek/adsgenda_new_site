'use client'
import React from "react";
import Image from "next/image";
import LineCta from "./lineCta";

import CountUp from 'react-countup';

export default function About(){
    return(
        <section className="relative md:py-24 py-16" id="about">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <div className="relative">
                                <Image src='/images/about.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="rounded-full shadow dark:shadow-gray-700" alt=""/>

                                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                                    <div className="text-center">
                                        <span className="text-ads-primary text-2xl font-semibold mb-0 block"><CountUp className="counter-value text-6xl font-semibold" start={0} end={17}/>+</span>
                                        <span className="font-semibold block mt-2">Years <br/> Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">Who Are We ?</h6>
                            <h3 className="font-semibold text-xl leading-normal mb-4">We're a Digital Masters <br/> Your One-Stop Digital Solution</h3>

                            <p className="text-slate-400 max-w-xl mb-6">We provide expert services to build, grow, and elevate your digital presence. From design and development to strategic marketing, we deliver tailored solutions to meet all your digital needs.</p>
                            <LineCta href="https://line.me" text="ติดต่อเรา" fontSize="text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}