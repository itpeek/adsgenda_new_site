
import React from "react"
import HeroCarousel from "./components/heroCarousel";
import About from "./components/about";
import Services from "./components/services";
import AgencyTab from "./components/agencyTab";
import Cta from "./components/cta";
import Client from "./components/client";
import Pricing from "./components/pricing";
import GetInTouch from "./components/getInTouch";
import BlogPosts from "./data/api/BlogPosts";
import GsapSlider from "./components/gsapSlider";

export default function IndexSeven(){
    return(
        <>
            <GsapSlider/>
            <About/>
            <Services/>
            <AgencyTab/>
            <Cta/>
            <Client/>
            <Pricing/>
            <BlogPosts/>
            <GetInTouch/>
        </>
    )
}