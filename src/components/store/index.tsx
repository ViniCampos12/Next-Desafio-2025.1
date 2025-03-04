import { Search } from "lucide-react";
import ProductCard from "./productCard";
import Link from "next/link";


export default function Store(){
    return(
        <div className="flex flex-col items-center justify-center pt-5 pb-5 ">
            <h1 className="text-xl lg:text-3xl">Nossos Produtos</h1>
            <div className="bg-gradient-to-r from-white-vs/15 to-black-vs/15 rounded-xl w-full py-3 flex flex-col gap-4">
                <div className="w-full flex justify-end items-center px-3">
                    <div className="flex bg-primary items-center justify-center text-[8px] w-48 rounded-2xl gap-1 text-white-vs h-full p-1">
                        <input type="text" className="flex-1 h-full px-2 outline-none bg-transparent"/>
                        <Search className="w-4 h-4"/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <div className="flex justify-center">
                    <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                        <Link href="/">
                            Paginação
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}