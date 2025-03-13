'use client'

import { Search } from "lucide-react";
import ProductCard from "./productCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Products } from "../../../types/data";
import Pagination from "../pagination";


export default function Store({products, count, totalPages}: {products: Products[], count: number, totalPages:number}){

    //Pesquisa min 53 pra fazer sumir coisas ao mudar link
    const searchParams = useSearchParams();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '');

    const handleSearch = (query:string) => {
        if(!query)
            return

        const params = new URLSearchParams();
        params.set('query', query);
        router.push(`/produtos?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(searchTerm);
    }
    //

    return(
        <div className="flex flex-col items-center justify-center pt-5 pb-5 md:px-3">
            <h1 className="text-xl lg:text-3xl mb-3 lg:p-3">Nossos Produtos</h1>
            <div className="bg-gradient-to-r from-white-vs/15 to-black-vs/15 rounded-xl w-full py-3 flex flex-col gap-4">
                <form onSubmit={handleSubmit} className="w-full flex justify-end items-center px-3 lg:p-6">
                    <div className="flex bg-primary items-center justify-center text-[8px]  w-48 lg:w-60 lg:px-2 rounded-2xl gap-1 text-white-vs h-full p-1 lg:py-2 hover:scale-105 transition-all duration-200">
                        <input
                            type="text"
                            className="flex-1 h-full px-2 outline-none bg-transparent md:text-sm lg:text-md"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search size={16}/>
                    </div>
                </form>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 md:py-3">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product}/>
                    ))}
                    {totalPages > 1 && (
                        <Pagination totalPages={totalPages}/>
                    )}
                    
                </div>
            </div>
        </div>
    )
}