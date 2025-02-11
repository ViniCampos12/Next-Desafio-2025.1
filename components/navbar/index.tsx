'use client'
import { House, Menu, ShoppingCart, X } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

  //exigem recursos JavaScript do lado do cliente

const links = [
    {href: '/', label: 'Home', icone: House},
    {href: '/', label: 'Produtos', icone: House},
    {href: '/', label: 'Contato', icone: House},
    {href: '/', label: 'Gerenciamento', icone: House},
    {href: '/', label: 'Login', icone: House},
    {href: '/', label: '', icone: ShoppingCart}
]


export default function Navbar(){

    const [isNavOpen, setIsNavOpen] = useState(false);
    //Armazena estado atual e função que altera valor

    const toggleNav = () => setIsNavOpen(!isNavOpen)
    //Inverte o valor atual

   return(
    <header className="bg-primary text-white-vs sticky top-0 z-20 mx-auto w-full lg:px-5 ms:p-0 mb-8">
        <div className="w-full flex justify-between items-center">
            <div className={`flex items-center justify-center gap-2 ${isNavOpen ? 'w-full': ''}  lg:px-5`}>
                <Link href="/">
                    <Image
                        src="/logo/logo.png"
                        alt="Logo do site"
                        width={904}
                        height={904}
                        className="h-20 w-20 rounded-xl object-cover min-w-20"
                    />
                </Link>
                <Link href="/" className="text-lg lg:text-3xl">
                    <span>Vinishoes</span>
                </Link>
            </div>
            <nav className="pr-5 lg:pr-5">
                <div className="hidden lg:flex flex-start gap-6 text">
                    {links.map((link,index) => (
                        <Link href={link.href} key={index} className="hover:scale-110 transition-all duration-200">
                            {link.label === "" ? <link.icone size={24} /> : <span>{link.label}</span>}
                        </Link>
                    ))}
                </div>
                <div className="lg:hidden">
                    {!isNavOpen ? 
                        <Menu
                            onClick={toggleNav}
                        />
                        :
                        ""
                    }
                </div>
            </nav>
        </div>
        {isNavOpen && (
            <div className="flex flex-col w-full items-center justify-center index-50 gap-2 text-sm pb-3">
                <X
                        onClick={toggleNav}
                />
               {links.map((link,index) => (
                    <Link href={link.href} key={index}>
                        {link.label === "" ? <div className="flex gap-1 text-sm"><link.icone size={18} /> Carrinho </div>: <span>{link.label}</span>}
                    </Link>
                ))}
            </div>
        )}
    </header>
   ) 
}