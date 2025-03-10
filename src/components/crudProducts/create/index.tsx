import Link from "next/link";
import Image from "next/image";

export default function CreateProduct(){
    return(
        <div className=" bg-primary rounded-lg w-72 md:w-96 lg:w-[544px] mt-10 mb-10 flex flex-col items-center py-4 text-white-vs">
            <h1 className="md:text-lg lg:text-2xl">Criar Produto</h1>
            <div className="flex justify-center items-center w-full mb-4 p-4 lg:px-10">
                <form className="w-full space-y-4 ">
                    <div className="flex flex-col gap-1">
                        <label className="text-white-vs lg:text-xl">Nome:</label>
                        <input type="text" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2" />
                        <label className="text-white-vs lg:text-xl">Descrição:</label>
                        <input type="text" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2" />
                        <label className="text-white-vs lg:text-xl">Preço:</label>
                        <input type="number" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2" />
                        <label className="text-white-vs lg:text-xl">Tamanho:</label>
                        <input type="number" className="border-2 p-1 px-2 rounded-xl w-full  bg-transparent border-white-vs mb-2" />
                        <label className="flex flex-col w-full">
                            Imagem:
                        <input type="file" accept="image/*" id="adcImage" name="imagem" required className="w-full mt-2"/>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-white-vs text-primary text-sm p-2 px-4 rounded-2xl md:text-lg lg:text-xl lg:px-4 lg:py-3" type="submit">
                            <Link href="/">
                                Criar
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}