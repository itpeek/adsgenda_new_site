import Link from "next/link";
import { FaLine  } from '../assets/icons/vander'

export default function LineCta({ href, text = "ติดต่อเรา", fontSize = "text-sm" }) {
  return (
    <Link
      href={href || "https://line.me/R/ti/p/@352tegsj"}
      target="_blank"
      className={`gap-1 h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-[#06C755] text-white`} >
        <FaLine className={`${fontSize}`} />
        {text}
    </Link>

 );
}
