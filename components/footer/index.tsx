import Link from "next/link";
import Image from "next/image"; 
import { Facebook, Instagram } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return(
        <footer className="w-full bg-primary flex justify-between items-center gap-5 text-white-vs py-2 ">
            <Link href="/" className="min-w-fit ">
                <Image
                    src="/logo/logo.png"
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className="h-28 w-28 rounded-xl lg:h-28 lg:w-28 cursor-pointer"
                />
            </Link>
            <div className="text-sm lg:text-3xl cursor-default md:text-xl">
                <p>© Vinishoes - 2025</p>
            </div>
            <div className=" flex flex-col justify-center items-center text-lg px-2 gap-2 md:text-xl md:pr-4 lg:flex-row lg:gap-20 lg:mr-5 lg:text-3xl">
                <Link href="/" className="cursor-pointer hover:scale-105 transition-all duration-200">
                    <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="/" className="cursor-pointer hover:scale-105 transition-all duration-200">
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="/" className="cursor-pointer hover:scale-105 transition-all duration-200">
                    <FontAwesomeIcon icon={faWhatsapp}/>
                </Link>
                <Link href="/" className="cursor-pointer hover:scale-105 transition-all duration-200">
                    <FontAwesomeIcon icon={faXTwitter}/>
                </Link>
            </div>
        </footer>
    )
}