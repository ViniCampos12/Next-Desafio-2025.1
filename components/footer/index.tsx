import Link from "next/link";
import Image from "next/image"; 
import { Facebook, Instagram } from "lucide-react";

export default function Footer(){
    return(
        <footer className="w-full bg-primary flex justify-between items-center">
            <Link href="/">
                <Image
                    src="/logo/logo.png"
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className="h-40 w-40 rounded-xl"
                />
            </Link>
            <div>
                <p>© Vinishoes - 2025</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Instagram/>
                <Facebook/>
            </div>
        </footer>
    )
}