import Link from "next/link"
import { ReactNode } from "react"

type ButtonActionProps = {
   icon?: ReactNode;
}


export default function ButtonAction({icon}:ButtonActionProps){
    return(

        <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-3 lg:py-1" type="button">
            <Link href="/" className="flex items-center gap-2">
                {icon}
            </Link>
        </button>
    )
}