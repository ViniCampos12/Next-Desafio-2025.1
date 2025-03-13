'use client'


import Link from "next/link"
import { useState } from "react";
import { Products } from "../../../../types/data";
import { updateProduct } from "../../../../actions/admin/products/actions";
import { Carter_One } from "next/font/google";

export default function EditProduct({product}: {product: Products}){
    const updateProductWithId = updateProduct.bind(null, product?.id);

    return(
        <div className=" bg-primary rounded-lg w-72 md:w-96 lg:w-[544px] mt-10 mb-10 flex flex-col items-center py-4 text-white-vs">
            <h1 className="md:text-lg lg:text-2xl">Editar Produto</h1>
            <div className="flex justify-center items-center w-full mb-4 p-4 lg:px-10">
                <form className="w-full space-y-4 " autoComplete="off" action={updateProductWithId}>
                    <div className="flex flex-col gap-1">
                        <label className="text-white-vs lg:text-xl">Nome:</label>
                        <input 
                            name="name"
                            type="text" 
                            className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2"  
                            defaultValue={product?.name}
                        />
                        <label className="text-white-vs lg:text-xl">Descrição:</label>
                        <input 
                            name="description"
                            type="text" 
                            className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2"  
                            defaultValue={product?.description || ""} 
                        />
                        <label className="text-white-vs lg:text-xl">Preço:</label>
                        <input
                            name="price"
                            type="number" 
                            className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2" 
                            defaultValue={product?.price}
                         />
                        <label className="text-white-vs lg:text-xl">Tamanhos disponíveis (separado por vírgulas):</label>
                        <input
                            name="sizes" 
                            type="text" 
                            className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2"
                            defaultValue={product?.sizes?.join(", ")} 
                        />
                        <label className="flex flex-col w-full">
                            Imagem (coloque mesmo que não for muda-lá):
                        <input
                            type="file" 
                            accept="image/*" 
                            id="adcImage" 
                            name="image"
                            required 
                            className="w-full mt-2"
                        />
                        </label>
                    </div>
                    <div className="flex justify-center gap-7 pt-3">
                        <button className="bg-white-vs text-primary text-sm p-2 px-4 rounded-2xl md:text-lg lg:text-xl lg:px-4 lg:py-3" type="submit">
                            Editar
                        </button>
                        <button className="bg-white-vs text-primary text-sm p-2 px-4 rounded-2xl md:text-lg lg:text-xl lg:px-4 lg:py-3" type="button">
                            <Link href="/gerenciamento">
                                Cancelar
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}