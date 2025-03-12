import Link from "next/link";
import Image from "next/image";
import { Products } from "../../../../types/data";

type HighlightCardProps = {
    product: Products;
}

export default function Card({product}: HighlightCardProps){
    return(
        <Link href={`/produto/${product.id}`} className="flex flex-col gap-3 w-32 hover:border-black-vs hover:border transition-all duration-200 hover:scale-105 rounded-sm md:w-40 lg:w-80">
            <Image
                src={product.image || '/logo/logo.png'}
                alt="Produto"
                width={904}
                height={904}
                className="object-cover w-full h-32 md:h-40 lg:h-80"
            />
            <div className="flex flex-col justify-start items-start gap-2 text-black-vs text-sm pl-1 md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl ">
                <h2>{product.name}</h2>
                <p>R${product.price}</p>
            </div>
        </Link>
    )
}