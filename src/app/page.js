'use client'
import React from "react"
import NavLight from "./components/navLight"
import HeroCarousel from "./components/heroCarousel";
import About from "./components/about";
import Services from "./components/services";
import AgencyTab from "./components/agencyTab";
import Cta from "./components/cta";
import Client from "./components/client";
import Pricing from "./components/pricing";
import Blogs from "./components/blog";
import GetInTouch from "./components/getInTuoch";
import Footer from "./components/footer";
import Switcher from "./components/switcher";
import LineCtaSticky from "./components/lineCtaSticky";
import { LoadingBarContainer } from "react-top-loading-bar";

export default function IndexSeven(){
    return(
        <>
        <LoadingBarContainer>
            <NavLight/>
            <HeroCarousel/>
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
            <LineCtaSticky/>
        </LoadingBarContainer>
        </>
    )
}