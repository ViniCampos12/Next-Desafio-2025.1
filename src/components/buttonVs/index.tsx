import Link from "next/link"

type ButtonVsProps = {
   text: string;
   pageName: string;
}

export default function ButtonVs({text, pageName}:ButtonVsProps){
   return(
      <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3 hover:bg-[#140a85] transition-all duration-300" type="button">
         <Link href={`/${pageName}`}>
            {text}
         </Link>
      </button>
   )
}