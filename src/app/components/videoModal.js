'use client'
import React,{useState} from "react";
import Link from "next/link";

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

export default function VideoModal({className}){
    
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className={className}>
            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white">
                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
            </Link>
        </div>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="S_CGed6E610"
            onClose={() => setOpen(false)} 
        />
        </>
    )
}