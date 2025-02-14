'use client'
import React,{useState,useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FiMail , FaLine , IoMdMenu   } from '../assets/icons/vander'

import { Link as Link1 } from "react-scroll";

export default function NavLight(){

    let [scroll, setScroll] = useState(false);
    let [manu, setManu] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 150);
        });
        return()=>{
            window.removeEventListener("scroll", () => {
                setScroll(window.scrollY > 150);
            });
        }
    }, []);
   
    return(
        <>
        <div id="navbar">
            <div className="topbar absolute top-0 left-0 right-0 z-10 bg-ads-primary dark:bg-slate-900 transition-all duration-500">
                <div className="container max-h-36px lg:min-h-[36px] relative flex flex-wrap items-center justify-between">
                    <ul className="lg:col-span-4 list-none md:text-end text-center md:mt-0 space-x-1 ">
                        <li className="inline"><Link href="https://www.facebook.com/adsgenda/" target="_blank" className="text-xs size-9 inline-flex justify-center items-center "><FaFacebook className="text-white size-4 align-middle" title="facebook" /></Link></li>
                        <li className="inline"><Link href="https://line.me/R/ti/p/@352tegsj" target="_blank" className="text-xs size-9 inline-flex justify-center items-center "><FaLine className="text-white size-4 align-middle" title="line"/></Link></li>
                        <li className="inline"><Link href="mailto:webmaster@adsgenda.com" target="_blank" className="text-xs size-9 inline-flex justify-center items-center "><FiMail className="text-white size-4 align-middle" title="email"/></Link></li>
                    </ul>
                </div>
            </div>
            <nav className={`navbar ${scroll ? 'is-sticky fixed' : 'absolute bg-transparent mt-[36px]'}`}>
                <div className="container relative flex flex-wrap items-center justify-between">
                    <Link className="navbar-brand md:me-8" href="/">
                        <span className="inline-block dark:hidden">
                            <Image src='/images/logo-color.png' width={75} height={22} className="l-dark object-contain" alt=""/>
                            <Image src='/images/logo-white.png' width={75} height={22} className="l-light object-contain" alt=""/>
                        </span> 
                        <Image src='/images/logo-white.png' width={75} height={22} className="hidden dark:inline-block object-contain" alt=""/>
                    </Link>

                    <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                        <ul className="list-none menu-social mb-0">
                            <li className="inline">
                                <Link href="https://line.me/R/ti/p/@352tegsj" target="_blank" className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-[#06C755] text-white uppercase hidden lg_992:flex">
                                    <button className="flex gap-1 items-center justify-center text-sm">
                                        <FaLine className="text-xl" />
                                        ติดต่อเรา
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        <button data-collapse="menu-collapse" type="button" className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden" onClick={() =>setManu(!manu)}>
                            <span className="sr-only">Navigation Menu</span>
                            <IoMdMenu className="text-2xl" />
                        </button>
                    </div>

                    <div className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${manu ? '' : 'hidden'}`} id="menu-collapse">
                        <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
                            <li className="nav-item">
                                <Link1 className="nav-link ms-0" to="home" smooth={true} duration={1000} activeClass='active' spy={true}>Home</Link1>
                            </li>
                            <li className="nav-item">
                                <Link1 className="nav-link ms-0" to="about" smooth={true} duration={1000} activeClass='active' spy={true}>About</Link1>
                            </li>
                            <li className="nav-item">
                                <Link1 className="nav-link ms-0" to="services" smooth={true} duration={1000} activeClass='active' spy={true}>Services</Link1>
                            </li>
                            <li className="nav-item">
                                <Link1 className="nav-link ms-0" to="review" smooth={true} duration={1000} activeClass='active' spy={true}>Testimonial</Link1>
                            </li>
                            <li className="nav-item">
                                <Link1 className="nav-link ms-0" to="pricing" smooth={true} duration={1000} activeClass='active' spy={true}>Pricing</Link1>
                            </li>
                            <li className="nav-item">
                                <Link1 className="nav-link ms-0" to="blog" smooth={true} duration={1000} activeClass='active' spy={true}>Blogs</Link1>
                            </li>
                            <li className="nav-item">
                                <Link1 className="nav-link ms-0" to="contact" smooth={true} duration={1000} activeClass='active' spy={true}>Contact us</Link1>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}