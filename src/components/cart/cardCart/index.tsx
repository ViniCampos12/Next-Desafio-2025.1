'use client'

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { IndividualProduct } from "../../../../types/data";
import { useState } from "react";

export default function CardCart({product, size}: {product: IndividualProduct, size:number}){

    const [isExcluded, setIsExcluded] = useState(false);
    
    const toggleExcluded = () => setIsExcluded(!isExcluded);

    return(
        <div className={`border border-primary flex justify-between gap-2 p-3 pr-2 rounded-lg ${isExcluded ? "hidden" : ""}`}>
            <Image
                src={product?.image || '/logo/logoAzul.png'}
                alt="Produto"
                width={904}
                height={904}
                className="object-cover w-28 h-28 md:h-36 md:w-44 lg:h-40 lg:w-52"
            />
            <div className="flex flex-col justify-center items-start text-[13px] text-black-vs md:text-base">
                <h2 className="font-semibold">{product?.name || "Carrinho Padrão, tem carrinho para cada produto único"}</h2>
                <p className="font-ovo">R${product?.price || 3999.90}</p>
                <p className="font-ovo">Tamanho:{size} </p>
            </div>
            <div className="min-h-full pt-3">
                <Trash2 className="text-primary hover:scale-110 transition-all duration-300 cursor-pointer" onClick={toggleExcluded}/>
            </div>
        </div>
    )
}