import { useState, useEffect } from "react";
import Link from "next/link";
import PriceCustomizationPopup from "./PriceCustomizationPopup";

export default function Pricing(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [finalPrice, setFinalPrice] = useState(null);
  
    const handleOpenPopup = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };
  
    const handleSavePrice = (customizationDetails) => {
        setFinalPrice(customizationDetails);
      };   
    return(
        <section className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="pricing">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal mb-4">Our Website Pricing</h3>
                <p className="text-slate-400 max-w-2xl mx-auto">เลือกแพ็คเกจที่เหมาะสมกับความต้องการและงบประมาณของคุณเพื่อเริ่มต้นสร้างเว็บไซต์ที่เป็นตัวตนของคุณ</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md h-fit">
                    <h6 className="font-semibold mb-5 text-xl">Landing Starter</h6>

                    <div className="flex mb-5">
                        <span className="text-lg font-medium">฿</span>
                        <span className="price text-5xl h6 font-semibold mb-0">15,000</span>
                    </div>

                    <ul className="text-[14px] list-none text-slate-400">
                        <li className="mb-1 flex"><span>- Landing Page หน้าเดียว</span></li>
                        <li className="mb-1 flex"><span>- พร้อมแบบฟอร์ม (Lead Form)</span></li>
                        <li className="mb-1 flex"><span>- พร้อมติดตั้ง <span className="text-red-600">*</span>{ }Analysis tool</span></li>
                        <li className="mb-1 flex mt-5"><span className="text-[12px] underline font-bold">เหมาะสำหรับเว็บไซต์หน้าเดียว ที่ต้องการเน้นปิดการขาย<span className="text-[#06C755]">ผ่านไลน์</span> หรือช่องทางอื่นๆ</span></li>
                    </ul>
                    <Link href="" className="text-sm h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-ads-primary/5 hover:bg-ads-primary text-ads-primary hover:text-white w-full mt-5">สนใจแพคเกจนี้ / ดูตัวอย่าง</Link>
                    <p className="text-sm text-slate-400 mt-3"><span className="text-red-600">*</span>GA4, Facebook Pixel, Tiktok Pixel, หรืออื่นๆ</p>
                </div>
                <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md h-fit">
                    <div className="bg-gradient-to-tr from-ads-primary to-ads-secondary text-white py-2 px-6 h6 text-lg font-medium">แนะนำ/ยอดนิยม</div>
                    <div className="p-6">
                        <h6 className="font-semibold mb-5 text-xl">Business Starter</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">฿</span>
                            <span className="price text-5xl h6 font-semibold mb-0">29,000</span>
                        </div>

                        <ul className="text-[14px] list-none text-slate-400">
                        <li className="mb-1 flex"><span>- ออกแบบเว็บไซต์ 5 - 10 หน้า</span></li>
                        <li className="mb-1 flex"><span>- เว็บไซต์รองรับระบบ 2 ภาษา</span></li>
                        <li className="mb-1 flex"><span>- มีระบบหลังบ้านพร้อมใช้งาน</span></li>
                        <li className="mb-1 flex"><span>- พร้อมต่อยอดระบบการขายในอนาคต (E-commerce)</span></li>
                        <li className="mb-1 flex"><span>- พร้อมแบบฟอร์ม (Lead Form)</span></li>
                        <li className="mb-1 flex"><span>- พร้อมติดตั้ง <span className="text-red-600">*</span>{ }Analysis tool</span></li>
                        </ul>
                        <Link href="" className="text-sm h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-ads-primary/5 hover:bg-ads-primary text-ads-primary hover:text-white w-full mt-5">สนใจแพคเกจนี้ / ดูตัวอย่าง</Link>

                        <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p>
                    </div>
                </div>                

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md h-fit">
                    <h6 className="font-semibold mb-5 text-xl">Professional Bussiness</h6>

                    <div className="flex mb-5">
                        <span className="text-lg font-medium">฿</span>
                        <span className="price text-5xl h6 font-semibold mb-0">29,000</span>
                    </div>

                    <ul className="text-[14px] list-none text-slate-400">
                    <li className="mb-1 flex"><span>- พร้อมแบบฟอร์ม (Lead Form)</span></li>
                        <li className="mb-1 flex"><span>- พร้อมติดตั้ง <span className="text-red-600">*</span>{ }Analysis tool</span></li>
                        <li className="mb-1 flex mt-5"><span className="text-[12px] underline font-bold">เหมาะสำหรับเว็บไซต์หน้าเดียว ที่ต้องการเน้นปิดการขาย<span className="text-[#06C755]">ผ่านไลน์</span> หรือช่องทางอื่นๆ</span></li>
                    </ul>
                    <Link href="" className="text-sm h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-ads-primary/5 hover:bg-ads-primary text-ads-primary hover:text-white w-full mt-5">สนใจแพคเกจนี้ / ดูตัวอย่าง</Link>
                </div>


                <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-ads-primary to-teal-700 h-fit">
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Your Custom Price</h6>

                        <div className="flex mb-5">
                            
                        {finalPrice ? (
                            <>
                                {finalPrice.price !== undefined && finalPrice.price !== null && (
                                <>
                                    <span className="text-lg font-medium">฿</span>
                                    <span className="price text-5xl h6 font-semibold mb-0">
                                    {finalPrice.price.toLocaleString('en-US')}
                                    </span>
                                </>
                                )}
                            </>
                            ) : (
                            <p className="text-slate-400 mb-5">สามารถเลือกความต้องการได้ด้วยตัวคุณเอง</p>
                            )}

                        </div>                        

                        <ul className="text-[14px] list-none text-slate-400">
                            {finalPrice && (
                            <>
                            {finalPrice?.includeSalesSystem && (
                                <>
                                <li className="mb-1 flex"><span>- E-Commerce Website</span></li>
                                <li className="mb-1 flex"><span>- รองรับระบบ API</span></li>
                                </>
                            )}
                            {finalPrice?.needHosting && (
                                <li className="mb-1 flex"><span>- Hosting 1 ปี</span></li>
                            )}            
                            {finalPrice?.needDomain && (
                                <li className="mb-1 flex"><span>- Domain {finalPrice.domain} 1 ปี</span></li>
                            )}                                                  
                            <li className="mb-1 flex"><span>- พร้อมแบบฟอร์ม (Lead Form)</span></li>
                            <li className="mb-1 flex"><span>- พร้อมติดตั้ง <span className="text-red-600">*</span>Analysis tool</span></li>
                            <li className="mb-1 flex"><span>- SEO Research</span></li>
                            <li className="mb-1 flex"><span>- SEO Setting Onpage</span></li>
                            </>
                            )}
                        </ul>
                        <button onClick={handleOpenPopup} className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-ads-primary/5 hover:bg-ads-primary text-ads-primary hover:text-white w-full mt-5 text-[12px]">ปรับแต่งความต้องการคลิกเลย</button>
                    </div>
                </div>
            </div>
        </div>

        <PriceCustomizationPopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSave={handleSavePrice}
        />        
    </section>
    )
}