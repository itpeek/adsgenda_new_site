import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import { companyLogo } from "../data/data";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import Blogs from "../components/blog";
import GetInTouch from "../components/getInTouch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function IndexFour(){
    return(
        <>
        <Navbar/>
        <section className="relative md:pt-44 py-36 bg-slate-50 dark:bg-slate-800" id="home">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center text-center">
                    <div className="">
                        <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize mb-5">Grow Sales with Our <br/> Strategy First Approach</h1>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    
                        <div className="subcribe-form mt-6 mb-3">
                            <form className="relative max-w-xl mx-auto">
                                <input type="email" id="emailid" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800" placeholder="yourname@domain.com"/>
                                <button type="submit" className="px-6 tracking-wide inline-flex items-center justify-center font-medium absolute top-[2px] end-[3px] h-[46px] bg-teal-500 text-white rounded-full">Subscribe Now</button>
                            </form>
                        </div>

                        <span className="font-medium">Looking for help? <Link href="" className="text-teal-500">Get in touch with us</Link></span>
                    </div>

                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2 mx-auto mt-8 items-center">
                        <div className="lg:col-span-4">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                           <Image src='/images/ab1.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow rounded-lg" alt=""/>
                                       
                                    </div>
                                </div>
    
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                        <Image src='/images/ab3.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow rounded-lg" alt=""/>
                                        <Image src='/images/ab4.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow rounded-lg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <Image src='/images/ab7.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow rounded-lg" alt=""/>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="grid grid-cols-2 gap-4 items-center">
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                        <Image src='/images/ab6.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow rounded-lg" alt=""/>
                                        <Image src='/images/ab5.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow rounded-lg" alt=""/>
                                    </div>
                                </div>
    
                                <div className="">
                                    <div className="grid grid-cols-1 gap-4">
                                        <Image src='/images/about2.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow rounded-lg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-6 border-b border-gray-100 dark:border-gray-700">
            <div className="container relative">
                <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
                    {companyLogo.map((item, index) =>{
                        return(
                        <div className="mx-auto py-4" key={index}>
                            <Image src={item} width={72} height={24} className="h-6" alt=""/>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <About/>
        <Services/>
        <AgencyTab/>
        <Cta/>
        <Client/>
        <Pricing/>
        <Blogs/>
        <GetInTouch/>
        <Footer/>
        <Switcher/>
        </>
    )
}