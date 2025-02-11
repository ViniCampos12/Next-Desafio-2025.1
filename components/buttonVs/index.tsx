import Link from "next/link";

type ButtonProps = {
    title:string;
    href:string;
}

export default function ButtonVs({title,href}:ButtonProps){
    return(
        <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3 " type="button">
            <Link href={href}>
                {title}
            </Link>
        </button>
    )
}




