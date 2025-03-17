'use client'
import { IndividualProduct } from "../../../types/data"
import ButtonVs from "../buttonVs"
import CardCart from "./cardCart"
import Link from "next/link"

export default function Cart({product}: {product: IndividualProduct} ){


    return(
        <div className="flex flex-col px-2 py-3 gap-8 md:flex-row md:justify-around md:items-start md:gap-16 md:p-7 md:grid md:grid-flow-col md:grid-cols-6 lg:px-8">
            <div className="bg-gray-vs bg-opacity-20 rounded-lg flex flex-col p-2 gap-3 py-3 md:col-span-4 md:px-3">
                <h2 className="text-xl lg:text-3xl">Seu Carrinho</h2>
                <div className="flex flex-col gap-3">
                    <CardCart product={product} size={product?.sizes?.[0] ?? 32}/>
                    <CardCart product={product} size={product?.sizes?.[1] ?? 32}/>
                    <CardCart product={product} size={product?.sizes?.[2] ?? 32}/>
                </div>
                <div className="flex items-center justify-center mt-2 md:mt-5">
                    <ButtonVs text="Adicionar mais produtos" pageName="/produtos"/>
                </div>
            </div>
            <div className="bg-gray-vs bg-opacity-20 rounded-lg flex flex-col p-2 gap-3 py-3 text-black-vs md:py-7 md:px-5 md:col-span-2">
                <div className="flex items-center justify-center">
                <button 
                    className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3 hover:bg-[#140a85] transition-all duration-300" 
                    type="button"
                    onClick={() => alert("Produto Comprado!")}
                >
                    <Link href="/">Comprar</Link>
                </button>
                </div>
                <h3>Resumo do pedido</h3>
                <div className="font-ovo">
                    <p>3 produtos</p>
                    <p>Total: R${(product?.price ?? 0) * 3}</p>
                </div>
            </div>
        </div>
    )
}