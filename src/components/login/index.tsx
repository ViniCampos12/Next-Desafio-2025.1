import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Login(){
    return(
        <div className="bg-white-vs rounded-lg w-72 lg:w-[544px] m-0">
            <div className="flex justify-between px-4 lg:px-6 lg:pr-8">
                <Image
                    src="/logo/logoAzul.png"
                    alt="Logo do site"
                    width={904}
                    height={904}
                    className="h-20 w-20 rounded-xl object-cover min-w-20 lg:h-36 lg:w-36"
                />
                <div className="flex justify-center items-center">
                    <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                        <Link href="/login/cadastro">
                            Cadastrar-se
                        </Link>
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center w-full mb-4 p-4 lg:px-10">
                <form className="w-full space-y-4 ">  
                    <div className="flex flex-col gap-1">
                        <label className="text-blue-dark-vs lg:text-xl">Usuário:</label>
                        <input type="text" className="border-2 p-1 rounded-xl w-full  bg-transparent border-blue-dark-vs mb-2" />
                        <label className="text-blue-dark-vs lg:text-xl">E-mail:</label>
                        <input type="text" className="border-2 p-1 rounded-xl w-full  bg-transparent border-blue-dark-vs mb-2" />
                        <label className="text-blue-dark-vs lg:text-xl">Senha:</label>
                        <div className="flex justify-center items-center border-2 border-blue-dark-vs rounded-xl mb-2 p-1 gap-1">
                            <input type="password" className="w-full  bg-transparent outline-none " />
                            <Eye className="text-blue-dark-vs"/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-primary text-white-vs text-sm p-2 px-4 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="submit">
                            <Link href="/">
                                Entrar
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}