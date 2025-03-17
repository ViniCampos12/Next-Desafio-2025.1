import Link from "next/link";
import Image from "next/image";
import { Products } from "../../../../types/data";

export default function ProductCard({product}: {product: Products}){
    return(
        <div className="flex flex-col gap-3 w-32 pb-4  hover:border-black-vs hover:border transition-all duration-200 hover:scale-105 rounded-sm md:w-40 lg:w-80">
            <Image
                src={product?.image || '/logo/logo.png'}
                alt="Produto"
                width={904}
                height={904}
                className="object-cover w-full h-32 md:h-40 lg:h-80"
            />
            <div className="flex flex-col justify-center items-center gap-2 text-black-vs text-[12px] pl-1 md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl ">
                <h2 className="text-center">{product?.name}</h2>
                <p>R${product?.price}</p>
                <p className="text-black-bg text-[10px]">
                    {product?.description?.split('.')[0] + '.'}
                </p>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-primary text-white-vs text-sm p-2 lg:text-xl lg:px-4 lg:py-3 hover:bg-[#140a85] transition-all duration-300" type="button">
                        <Link href={`/produto/${product.id}`}>
                            Ver mais
                        </Link>
                </button>
            </div>
        </div>
    )
}