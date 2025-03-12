import { EllipsisVertical, Eye, Pencil, Plus, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DeleteButton, EditButton, ViewButton } from "./buttonAction"

export default function Manegement(){
    return(
        <div className="flex flex-col space-y-3 my-8 mx-3 lg:mx-9 ">
            <div className="flex justify-between items-center mx-3">
                <h1 className="text-base lg:text-2xl">Gerenciamento de Produtos</h1>
                <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3 hover:bg-[#140a85] transition-all duration-300" type="button">
                    <Link href="/gerenciamento/criar" className="flex items-center gap-2">
                        Criar <Plus/>
                    </Link>
                </button>
            </div>
            <div className="bg-gray-vs/20 rounded-lg">
                <table className="w-full divide-y divide-primary">
                    <thead className="bg-primary/15 rounded-lg">
                        <tr>
                            <th scope="col" className="hidden md:table-cell py-3 text-center text-sm tracking-wider rounded-tl-lg">Imagem</th>
                            <th scope="col" className=" py-3 text-center text-sm tracking-wider rounded-tl-lg md:rounded-none">ID</th>
                            <th scope="col" className="max-w-5 py-3 text-center text-sm tracking-wider">Nome</th>
                            <th scope="col" className=" py-3 text-center text-sm tracking-wider">Preço</th>
                            <th scope="col" className="hidden md:table-cell py-3 text-center text-sm tracking-wider">Descrição</th>
                            <th scope="col" className=" py-3 text-center text-sm tracking-wider rounded-tr-lg">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-primary">
                        <tr className="max-h-16 py-2">
                            <td className="hidden p-3 md:table-cell md:mt-2 ">
                                <Image
                                    src="/home/airJordan1.png"
                                    alt="Foto do produto"
                                    width={200}
                                    height={200}
                                    className="object-cover rounded-md shadow-sm md:max-h-14 md:max-w-14"
                                />
                            </td>
                            <td className="text-sm text-left p-3">1</td>
                            <td className="text-sm text-left p-3">Air Jordan 1 High OGMidnight Navy</td>
                            <td className="text-sm text-left p-3">800,00</td>
                            <td className="hidden md:table-cell text-sm text-left p-3">Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama</td>
                            <td className="md:pr-2">
                                <div className="md:flex gap-2 hidden">
                                    <ViewButton id={1}/>
                                    <EditButton id={1}/>
                                    <DeleteButton id={1}/>
                                    {/* <ButtonAction icon={<Eye size={20}/>} pageName={"gerenciamento/visualizar"}/>
                                    <ButtonAction icon={<Pencil size={20}/>} pageName={"gerenciamento/editar"}/>
                                    <ButtonAction icon={<Trash size={20}/>} pageName={"gerenciamento"}/> */}
                                </div>
                                <div className="md:hidden">
                                    <EllipsisVertical/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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