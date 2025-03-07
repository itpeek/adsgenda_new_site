'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AgencyTab(){
    let [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">A Performance-driven Marketing Agency</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">We specialize in delivering measurable results through data-driven strategies, in-depth analytics, and innovative campaigns. Our focus is on maximizing ROI and helping your business achieve its goals efficiently and effectively.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-ads-primary duration-500 ${activeIndex === 1 ? 'text-white bg-ads-primary hover:text-white' : ''}`} onClick={() => setActiveIndex(1)}>
                                        <span className="block">Step 1</span>
                                        <span className="text-lg mt-2 block">Meeting Session</span>
                                        <span className={`block mt-2 font-normal duration-500 ${activeIndex === 1 ? 'text-white hover:text-white' : 'text-slate-400'}`}>เราพร้อมที่จะรับฟังและทำความเข้าใจทุกความต้องการของคุณ ผ่านการนัดพบและพูดคุยอย่างใกล้ชิด เพื่อให้แน่ใจว่าทุกสิ่งตรงกับสิ่งที่คุณคาดหวัง</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-ads-primary duration-500 ${activeIndex === 2 ? 'text-white bg-ads-primary hover:text-white' : ''}`} onClick={() => setActiveIndex(2)}>
                                        <span className="block">Step 2</span>
                                        <span className="text-lg mt-2 block">Customized Proposal</span>
                                        <span className={`block mt-2 font-normal duration-500 ${activeIndex === 2 ? 'text-white hover:text-white' : 'text-slate-400'}`}>หลังจากเข้าใจสิ่งที่คุณต้องการแล้ว เราจะสรุปแผนงานที่ดีที่สุด พร้อมข้อเสนอที่ช่วยให้คุณเห็นภาพรวมของงานและสามารถตัดสินใจได้ง่ายขึ้น</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-ads-primary duration-500 ${activeIndex === 3 ? 'text-white bg-ads-primary hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        <span className="block">Step 3</span>
                                        <span className="text-lg mt-2 block">Start Your Project</span>
                                        <span className={`block mt-2 font-normal duration-500 ${activeIndex === 3 ? 'text-white hover:text-white' : 'text-slate-400'}`}>เมื่อคุณยืนยันแผนงานแล้ว ขั้นตอนสุดท้ายคือการชำระเงินและเริ่มต้นงานทันที เราจะเริ่มทำงานให้กับคุณโดยไม่มีความล่าช้า พร้อมให้ความคืบหน้าตลอด</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden' }>
                                <Image src='/images/blog/03.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Meeting Session</h5>
                                    <p className="text-slate-400 mt-4">ในขั้นตอนนี้ เราจะจัดการประชุมเพื่อลงรายละเอียดเกี่ยวกับสิ่งที่คุณต้องการ เราพร้อมรับฟังทุกข้อเสนอแนะและข้อกังวลของคุณ เพื่อให้เราเข้าใจอย่างถ่องแท้และสามารถแนะนำแนวทางที่ดีที่สุดได้ การประชุมนี้ช่วยให้เราเริ่มต้นได้อย่างมั่นใจและตรงกับสิ่งที่คุณคาดหวัง</p>
                                    <div className="mt-4">
                                        <LineCta text="ติดต่อเรา" fontSize="text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? '' : 'hidden' }>
                                <Image src='/images/blog/02.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Customized Proposal</h5>
                                    <p className="text-slate-400 mt-4">หลังจากที่เราเข้าใจสิ่งที่คุณต้องการแล้ว ทีมงานจะทำการสรุปแผนงานที่เหมาะสมกับความต้องการและเป้าหมายของคุณอย่างละเอียด เราจะเสนอโซลูชันที่ไม่เพียงแต่ตรงกับความต้องการของคุณ แต่ยังเพิ่มมูลค่าให้กับโครงการของคุณด้วยการนำเสนองานที่มีความคิดสร้างสรรค์และเฉพาะตัว</p>
                                    <div className="mt-4">
                                        <LineCta text="ติดต่อเรา" fontSize="text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? '' : 'hidden' }>
                                <Image src='/images/blog/01.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Start Your Project</h5>
                                    <p className="text-slate-400 mt-4">เมื่อทุกอย่างชัดเจนและคุณพอใจกับแผนงานที่เรานำเสนอแล้ว ขั้นตอนสุดท้ายคือการชำระเงินเพื่อเริ่มงาน เราจะเริ่มต้นทำงานทันทีที่ได้รับการยืนยันจากคุณ โดยเราจะรักษาความโปร่งใสในกระบวนการทั้งหมดและอัพเดตความคืบหน้าให้คุณทราบอย่างต่อเนื่อง</p>
                                    <div className="mt-4">
                                        <LineCta text="ติดต่อเรา" fontSize="text-xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
