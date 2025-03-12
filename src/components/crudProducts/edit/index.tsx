'use client'

import Link from "next/link"
import { useState } from "react";

export default function EditProduct(){
    const [name, setName] = useState("Air Jordan 1 High OGMidnight Navy");
    const [description, setDescription] = useState("Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.");
    const [price, setPrice] = useState(800.00);
    const [size, setSize] = useState(32);

    return(
        <div className=" bg-primary rounded-lg w-72 md:w-96 lg:w-[544px] mt-10 mb-10 flex flex-col items-center py-4 text-white-vs">
            <h1 className="md:text-lg lg:text-2xl">Editar Produto</h1>
            <div className="flex justify-center items-center w-full mb-4 p-4 lg:px-10">
                <form className="w-full space-y-4 ">
                    <div className="flex flex-col gap-1">
                        <label className="text-white-vs lg:text-xl">Nome:</label>
                        <input type="text" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2"  onChange={(e) => setName(e.target.value)} value={name}/>
                        <label className="text-white-vs lg:text-xl">Descrição:</label>
                        <input type="text" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2"  onChange={(e) => setDescription(e.target.value)} value={description} />
                        <label className="text-white-vs lg:text-xl">Preço:</label>
                        <input type="number" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2" onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} value={price}/>
                        <label className="text-white-vs lg:text-xl">Tamanhos:</label>
                        <input type="number" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2"  onChange={(e) => setSize(parseInt(e.target.value) || 0)} value={size}/>
                        <label className="flex flex-col w-full">
                            Imagem:
                        <input type="file" accept="image/*" id="adcImage" name="imagem" required className="w-full mt-2"/>
                        </label>
                    </div>
                    <div className="flex justify-center gap-7 pt-3">
                        <button className="bg-white-vs text-primary text-sm p-2 px-4 rounded-2xl md:text-lg lg:text-xl lg:px-4 lg:py-3" type="submit">
                            <Link href="/gerenciamento">
                                Editar
                            </Link>
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