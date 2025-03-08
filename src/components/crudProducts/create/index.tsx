import Link from "next/link";
import Image from "next/image";

export default function CreateProduct(){
    return(
        <div className="bg-primary rounded-lg w-72 lg:w-[544px] mt-10 mb-10 flex flex-col">
            <h1>Criar Produto</h1>
            <input type="image"/>
            <div className="flex justify-center items-center w-full mb-4 p-4 lg:px-10">
                <form className="w-full space-y-4 ">  
                    <div className="flex flex-col gap-1">
                        <label className="text-blue-dark-vs lg:text-xl">Usuário:</label>
                        <input type="text" className="border-2 p-1 rounded-xl w-full  bg-transparent border-blue-dark-vs mb-2" />
                        <label className="text-blue-dark-vs lg:text-xl">E-mail:</label>
                        <input type="text" className="border-2 p-1 rounded-xl w-full  bg-transparent border-blue-dark-vs mb-2" />
                        <label className="text-blue-dark-vs lg:text-xl">Senha:</label>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-primary text-white-vs text-sm p-2 px-4 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="submit">
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