import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Manegement(){
    return(
        <div className="flex flex-col space-y-2 my-8 ">
            <div className="flex">
                <h1>Gerenciamento de Produtos</h1>
                <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                    <Link href="/" className="flex items-center gap-2">
                        Criar <Plus/>
                    </Link>
                </button>
            </div>
            <table className="table-auto">
                <thead>
                    <th>Imagem</th>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image
                                src="/home/airJordan1.png"
                                alt="Foto do produto"
                                width={300}
                                height={300}
                                className="object-cover w-10/12 max-h-60 max-w-60 rounded-md shadow-sm md:w-full md:h-full md:max-w-full md:max-h-full"
                            />
                        </td>
                        <td>1</td>
                        <td>Air Jordan 1 High OGMidnight Navy</td>
                        <td>R$800,00</td>
                        <td>Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama</td>
                        <td>
                            <div>
                                <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                                    <Link href="/" className="flex items-center gap-2">
                                        .
                                    </Link>
                                </button>
                                <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                                    <Link href="/" className="flex items-center gap-2">
                                        .
                                    </Link>
                                </button>
                                <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                                    <Link href="/" className="flex items-center gap-2">
                                        .
                                    </Link>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-center">
                    <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                        <Link href="/">
                            Paginação
                        </Link>
                    </button>
                </div>
        </div>
    )
}