import Card from "./card";
import Link from "next/link";

export default function Highlights(){
    return(
        <section className="pt-3 px-2 pb-4 flex flex-col items-center space-y-4 md:space-y-10 w-full  bg-gradient-to-r from-gray-vs/30 to-black-bg/30 md:pb-10">
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl p-2 text-black-vs">Produtos em Destaque</h1>
            <div className="flex flex-wrap w-full h-auto gap-12 justify-center lg:px-40 lg:gap-y-11 lg:gap-x-20">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <button className="bg-primary text-white-vs text-sm p-2 rounded-2xl lg:text-xl lg:px-4 lg:py-3" type="button">
                    <Link href="/">
                        Veja mais
                    </Link>
                </button>
        </section>
    )
}