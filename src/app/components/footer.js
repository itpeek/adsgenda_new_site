import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FaLinkedin, FaFacebook , FiInstagram, FiMail, FaFacebookMessenger,FaSpotify , FaLine  } from '../assets/icons/vander'

export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200 mb-10 lg:mb-0">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-3 md:text-start text-center">
                            <Link href="#" className="text-[22px] focus:outline-none">
                                <Image src='/images/logo-white.png' width={111} height={22} className="mx-auto md:me-auto md:ms-0" alt=""/>
                            </Link>
                        </div>

                        <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p className="mb-0">© {new Date().getFullYear()} Adsgenda All Rights Reserved.</p>
                        </div>

                        <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0 space-x-1">
                            <li className="inline"><Link href="https://www.facebook.com/adsgenda/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-ads-primary dark:hover:border-ads-primary hover:bg-ads-secondary dark:hover:bg-ads-secondary"><FaFacebook  className="size-4 align-middle" title="facebook"/></Link></li>
                            <li className="inline"><Link href="https://m.me/adsgenda/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-ads-primary dark:hover:border-ads-primary hover:bg-ads-secondary dark:hover:bg-ads-secondary"><FaFacebookMessenger className="size-4 align-middle" title="messenger"/></Link></li>
                            <li className="inline"><Link href="https://www.linkedin.com/company/adsgenda/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-ads-primary dark:hover:border-ads-primary hover:bg-ads-secondary dark:hover:bg-ads-secondary"><FaLinkedin className="size-4 align-middle" title="Linkedin"/></Link></li>
                            <li className="inline"><Link href="https://www.instagram.com/adsgenda_official/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-ads-primary dark:hover:border-ads-primary hover:bg-ads-secondary dark:hover:bg-ads-secondary"><FiInstagram className="size-4 align-middle" title="instagram"/></Link></li>
                            <li className="inline"><Link href="https://open.spotify.com/show/4Gu1biBeK8RG9yvi4cqdPB" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-ads-primary dark:hover:border-ads-primary hover:bg-ads-secondary dark:hover:bg-ads-secondary"><FaSpotify className="size-4 align-middle" title="spotify"/></Link></li>
                            <li className="inline"><Link href="https://line.me/R/ti/p/@352tegsj" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-ads-primary dark:hover:border-ads-primary hover:bg-ads-secondary dark:hover:bg-ads-secondary"><FaLine className="size-4 align-middle" title="line"/></Link></li>
                            <li className="inline"><Link href="mailto:webmaster@adsgenda.com" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-ads-primary dark:hover:border-ads-primary hover:bg-ads-secondary dark:hover:bg-ads-secondary"><FiMail className="size-4 align-middle" title="email"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}