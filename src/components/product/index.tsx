import Image from "next/image";
import SizeCard from "./sizeCard";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Product(){
    return(
        <div>
            <div className="mt-24 w-full flex justify-center">
                <Image
                    src="/home/airJordan1.png"
                    alt="Foto do produto"
                    width={904}
                    height={904}
                    className="object-cover w-11/12 rounded-md shadow-sm"
                    />
                </div>
            <div className="mt-2 px-4 space-y-4 mb-7">
                <div className="absolute z-10 top-28">
                    <h1>Air Jordan 1 High OG Midnight Navy</h1>
                    <h3>R$800,00</h3>
                </div>
                <div className="flex flex-wrap gap-3 justify-center items-center ">
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                    <SizeCard/>
                </div>
                <p className="text-center">
                    Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.
                </p>
                <div className="flex items-center justify-center">
                    <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                        <Link href="/" className="flex gap-2 items-center">
                        Adicionar ao Carrinho <ShoppingCart/>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}