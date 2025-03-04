import Link from "next/link";
import Image from "next/image";

export default function ProductCard(){
    return(
        <div className="flex flex-col gap-3 w-32 pb-4  hover:border-black-vs hover:border transition-all duration-200 hover:scale-105 rounded-sm md:w-40 lg:w-80">
            <Image
                src="/home/airJordan1.png"
                alt="Produto"
                width={904}
                height={904}
                className="object-cover w-full h-32 md:h-40 lg:h-80"
            />
            <div className="flex flex-col justify-center items-center gap-2 text-black-vs text-[12px] pl-1 md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl ">
                <h2 className="text-center">Air Jordan 1 High OG Midnight Navy</h2>
                <p>R$800,00</p>
                <p className="text-black-bg text-[10px]">Tênis Casual Masculino</p>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-primary text-white-vs text-sm p-2 lg:text-xl lg:px-4 lg:py-3" type="button">
                        <Link href="/">
                            Ver mais
                        </Link>
                </button>
            </div>
        </div>
    )
}