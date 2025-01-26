'use client'
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import LineCta from "./lineCta";
import { FaPlayCircle  } from '../assets/icons/vander'


export default function Cta(){
    let [isOpen, setOpen] = useState(false);
    return(
        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
        <div className="container relative">
            <div className="grid grid-cols-1 justify-center">
                <div className="relative z-1">
                    <div className="grid grid-cols-1 md:text-start text-center justify-center">
                        <div className="relative">
                            <img src='/images/home.png' alt=""/>
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#!" scroll={false} onClick={() => setOpen(true)}
                                    className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-ads-secondary text-ads-secondary dark:text-white">
                                    <FaPlayCircle className="size-14" />
                                </Link>
                            </div>
                            <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="zrgm-n_6Ygg"
                                onClose={() => setOpen(false)} 
                            />
                        </div>
                    </div>
                    <div className="content md:mt-8">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                    <div className="mt-8">
                                        <div className="section-title text-md-start">
                                            <h6 className="text-white/70 text-sm font-semibold uppercase">Free Consult</h6>
                                            <h3 className="font-semibold text-2xl leading-normal text-white mt-2">Easy Start With<br/>Adsgenda Now</h3>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="section-title text-md-start">
                                            <p className="text-white/70 max-w-xl mx-auto mb-2">ให้ธุรกิจของคุณเติบโตอย่างมั่นคง รวดเร็ว ทันสมัย ตามทันยุคใหม่ ให้บริการด้วยทีมงานมืออาชีพประสบการณ์มากกว่า 17 ปี</p>
                                            <LineCta href="https://line.me" text="ร่วมงานกับเรา" fontSize="text-xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-ads-secondary/50 to-ads-secondary/100"></div>
    </section>
    )
}