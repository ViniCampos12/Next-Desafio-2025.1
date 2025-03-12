'use client'

import { Eye, Pencil, Trash } from "lucide-react"
import Link from "next/link"

export function EditButton({id}: {id:number}){
    return(
        <Link href={`/gerenciamento/editar/${id}`} className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-3 lg:py-1 ">
            <button className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
                <Pencil size={20}/>
            </button>
        </Link>
    )
    
}

export function ViewButton({id}: {id:number}){
    return(
        <Link href={`/gerenciamento/visualizar/${id}`} className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-3 lg:py-1 ">
            <button className="flex items-center gap-2 hover:scale-110 transition-all duration-200">
                <Eye size={20}/>
            </button>
        </Link>
    )
}

export function DeleteButton({id}: {id:number}){
    return(
        <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-3 lg:py-1 " type="button">
                 <Trash size={20} className=" gap-2 hover:scale-110 transition-all duration-200"/>
         </button>
    )
}
