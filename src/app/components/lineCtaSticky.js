import Link from "next/link";
import { FaLine  } from '../assets/icons/vander'

export default function LineCtaSticky({ href, text = "ติดต่อเรา", fontSize = "text-sm" }) {
  return (
    <Link
    href={href || "#"}
    className='fixed z-1 bottom-0 left-0 right-0 lg_992:hidden'>    
        <div className={`w-full gap-1 h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium bg-[#06C755] text-white`}>
                <FaLine className={`${fontSize}`} />
                {text}
        </div>
    </Link>
 );
}
