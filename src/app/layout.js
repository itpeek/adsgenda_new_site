import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import './assets/css/materialdesignicons.min.css'
import './assets/scss/tailwind.scss'

const libre_franklin = Libre_Franklin({
   subsets: ["latin"],
   weight: ['400', '700','300','500','600','700'],
   variable: '--font-libre_franklin',
   });

export const metadata = {
  title: "Upcover - Next js Business Landing Page Template",
  description: "Next js Business Landing Page Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${libre_franklin.variable} font-libre_franklin text-base text-black dark:text-white bg-white dark:bg-slate-900`}>{children}</body>
    </html>
  );
}
