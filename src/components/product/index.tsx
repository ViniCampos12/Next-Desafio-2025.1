'use client'

import Image from "next/image";
import SizeCard from "./sizeCard";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Product(){
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const sizes = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43];
    const sizesAvailable = [32, 33, 34, 35, 36, 38, 39, 40, 42];

    return(
        <div className="md:grid md:grid-flow-col md:grid-cols-6 md:gap-5 lg:gap-20 md:py-20 md:px-8 lg:px-14">
            <div className="mt-24 w-full flex justify-center md:mt-0 md:col-span-3 md:max-h-[560px] md:max-w-[648px]">
                <Image
                    src="/home/airJordan1.png"
                    alt="Foto do produto"
                    width={904}
                    height={904}
                    className="object-cover w-10/12 max-h-60 max-w-60 rounded-md shadow-sm md:w-full md:h-full md:max-w-full md:max-h-full"
                    />
            </div>
            <div className="mt-2 px-4 space-y-4 mb-7 md:col-span-3 md:h-full md:flex md:flex-col md:justify-around md:items-center">
                <div className="absolute z-10 top-28 md:static lg:text-3xl lg:text-center">
                    <h1 className="lg:mb-8">Air Jordan 1 High OG Midnight Navy</h1>
                    <h3>R$800,00</h3>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center lg:gap-9">
                    {
                        sizes.map((size,index)=>(
                            <SizeCard 
                                key={size}
                                size={size}
                                available={sizesAvailable.includes(size)}
                                isSelected={selectedSize === size}
                                onSelect={setSelectedSize}
                            />
                        ))
                    }
                </div>
                <p className="text-center text-sm lg:text-base">
                    Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.
                </p>
                <div className="flex items-center justify-center">
                    <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3 hover:bg-[#140a85] transition-all duration-300" type="button">
                        <Link href="/" className="flex gap-2 items-center">
                        Adicionar ao Carrinho <ShoppingCart/>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}