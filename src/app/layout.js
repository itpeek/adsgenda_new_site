import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import './assets/scss/tailwind.scss'
import NavLight from "./components/navLight";
import Footer from "./components/footer";
import Switcher from "./components/switcher";
import LineCtaSticky from "./components/lineCtaSticky";

const noto_sans_thai = Noto_Sans_Thai({
   subsets : ['thai'],
   weight: ['400', '700','300','500','600','700'],
   display: "swap",   
   variable: '--font-noto_sans_thai',
   });

export const metadata = {
  title: "Adsgenda - รับทำการตลาด รับทำการตลาดออนไลน์ ครบวงจร",
  description: "บริษัทรับการตลาดครบวงจรเจ้าเดียวที่มีบริการ Online & Onground เราคือมืออาชีพประสบการณ์ระดับประเทศ Digital Marketing Agency ครบทีมที่ช่วยคุณสู่เป้าหมายที่ท้าทาย",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${noto_sans_thai.variable} font-noto_sans_thai text-base text-black dark:text-white bg-white dark:bg-slate-900`}>
        <NavLight/>
          {children}
        <Footer/>
        <Switcher/>
        <LineCtaSticky/>
        </body>
    </html>
  );
}
