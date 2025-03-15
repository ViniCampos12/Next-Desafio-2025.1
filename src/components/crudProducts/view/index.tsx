import Image from "next/image";
import { Products } from "../../../../types/data";

export default function ViewProduct({product}: {product: Products}){
    return(
        <div className=" bg-primary rounded-lg w-72 md:w-96 lg:w-[544px] mt-10 mb-10 flex flex-col space-y-3 items-center px-4 lg:px-5 py-4 text-white-vs">
            <div className="w-11/12 flex justify-center max-h-52 md:w-10/12 lg:w-9/12 md:max-h-60 lg:max-h-64">
                <Image
                    src={product?.image || "/home/airJordan1.png"}
                    alt="Foto do produto"
                    width={904}
                    height={904}
                    className="object-cover rounded-md shadow-sm "
                    />
            </div>
            <h1 className="text-center text-lg md:text-xl lg:text-2xl ">{product?.name}</h1>
            <h2 className="text-center text-lg md:text-xl lg:text-2xl ">R${product?.price}</h2>
            <p className="text-justify text-sm lg:text-base">{product?.description}</p>
            <p className="text-justify text-sm lg:text-base">Tamanho disposníveis: {product?.sizes?.join(", ")} </p>
        </div>
    )
}