import Link from "next/link";
import { RiArrowDownDoubleLine } from "react-icons/ri";

export default function ScrollDown() {
    
    return (
        <Link href="#about" className="flex flex-col items-center">
            <span className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-medium">
                Scroll Down
            </span>
            <RiArrowDownDoubleLine className="text-blue-400/80 w-5 h-5" />
        </Link>
    );
}