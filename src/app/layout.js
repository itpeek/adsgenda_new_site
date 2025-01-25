import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import './assets/scss/tailwind.scss'

const noto_sans_thai = Noto_Sans_Thai({
   subsets : ['thai'],
   weight: ['400', '700','300','500','600','700'],
   display: "swap",   
   variable: '--font-noto_sans_thai',
   });

export const metadata = {
  title: "Upcover - Next js Business Landing Page Template",
  description: "Next js Business Landing Page Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${noto_sans_thai.variable} font-noto_sans_thai text-base text-black dark:text-white bg-white dark:bg-slate-900`}>{children}</body>
    </html>
  );
}
