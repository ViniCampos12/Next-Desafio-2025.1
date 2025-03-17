import Image from "next/image";
import Link from "next/link";
import ButtonVs from "../buttonVs";


export default function HeroSection(){
    return(
        <div className="w-full bg-gradient-to-r from-gray-vs/40 to-primary/30 grid grid-flow-col grid-cols-6 items-center py-3 px-2 gap-1 lg:px-24">
            <div className="w-36 col-span-3 lg:w-96 md:w-80">
                <Image
                    src="/home/hero.png"
                    width={1920}
                    height={1080}
                    alt="Foto de apresentação"
                    className="w-full h-full lg:w-96 md:w-80"
                />
            </div>
            <div className="col-span-3 flex flex-col gap-5 lg:gap-10 items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-sm font-ovo lg:text-2xl text-center font-semibold">Encontre o Par Perfeito Para Cada Momento! </h1>
                    <p className="text-sm font-ovo lg:text-2xl text-center">
                    Descubra nossa coleção exclusiva de sapatos que unem estilo, conforto e qualidade. Do casual ao elegante, temos o que você precisa para dar o próximo passo com confiança! 
                    </p>
                </div>
                <ButtonVs text={"Conheça nossos produtos"} pageName={"/produtos"}/>
            </div>
        </div>
    )
}