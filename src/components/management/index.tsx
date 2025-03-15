'use client'

import { EllipsisVertical, Eye, Pencil, Plus, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DeleteButton, EditButton, ViewButton } from "./buttonAction"
import { Product } from "@prisma/client"
import Pagination from "../pagination"
import { useState } from "react"
import { deleteProduct } from "../../../actions/admin/products/actions"


export default function Manegement({products, count, totalPages}: {products: Product[], count:number, totalPages:number}){

    //Tentativa de Paginação
    // const searchParams = useSearchParams();
    // const currentPage = Number(searchParams.get('page')) || 1;

    const [isThreePointsOpen, setIsThreePointsOpen] = useState(false);
    const [isExcluded, setIsExcluded] = useState(false);

    const toggleThreePoints = () => setIsThreePointsOpen(!isThreePointsOpen)


    //Muda condições para que quando clica em excluir o modal e o fundo sumam
    const handleDelete = async (productId: number) => {
        await deleteProduct(productId);
        setIsExcluded(true); // Marca como excluído para fechar o modal.
        setIsThreePointsOpen(false); // Fecha o modal de ação após a exclusão.
    };

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
                <table className= {`w-full divide-y divide-primary transition-all rounded-lg ease-in-out duration-300 md:bg-transparent ${isThreePointsOpen  ? 'bg-gray-vs' : ''}`} onClick={toggleThreePoints}>
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
                        {products.map((product,index) => (
                            <tr className="max-h-16 py-2">
                                <td className="hidden p-3 md:table-cell md:mt-2 ">
                                    <Image
                                        src={product?.image || "/home/airJordan1.png"}   
                                        alt="Foto do produto"
                                        width={200}
                                        height={200}
                                        className="object-cover rounded-md shadow-sm md:max-h-14 md:max-w-14"
                                    />
                                </td>
                                <td className="text-sm text-left p-3">{product?.id}</td>
                                <td className="text-sm text-left p-3">{product?.name}</td>
                                <td className="text-sm text-left p-3">{product?.price}</td>
                                <td className="hidden md:table-cell text-sm text-left p-3">{product?.description}</td>  {/*slice 1:32*/}
                                <td className="md:pr-2">
                                    <div className="md:flex gap-2 hidden">
                                        <ViewButton id={product?.id}/>
                                        <EditButton id={product?.id}/>
                                        <DeleteButton id={product?.id}/>
                                    </div>
                                    <div className="md:hidden">
                                        <EllipsisVertical onClick={toggleThreePoints}/>
                                    </div>
                                </td>

                                {/* Modal das ações responsivas */ }
                                <div className={` md:hidden w-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex-col bg-white rounded-xl text-[12px] p-2  z-20 ${isThreePointsOpen ? 'block' : 'hidden'}`}>
                                    <ul className="w-full h-full flex flex-col justify-between items-start text-left gap-3">
                                        <li className="w-full hover:scale-105"> <Link href={`/gerenciamento/visualizar/${product?.id}`}>Visualizar</Link> </li>
                                        <li className="w-full hover:scale-105"> <Link href={`/gerenciamento/editar/${product?.id}`}>Editar</Link> </li>
                                        <li className="w-full hover:scale-105"> <button onClick={() => {handleDelete(product?.id)}}>Excluir</button> </li>
                                    </ul>
                                </div>
                            </tr>
                            
                        ))}                      
                    </tbody>
                </table>
            </div>
            {totalPages > 1 && (
                <Pagination totalPages={totalPages}/>
            )}
        </div>
    )
}