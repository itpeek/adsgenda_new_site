
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

export default function IndexSeven(){
    return(
        <>
            <HeroCarousel/>
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