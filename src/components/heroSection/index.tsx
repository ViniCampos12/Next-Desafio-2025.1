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
                <p className="text-sm font-ovo lg:text-2xl text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <ButtonVs text={"Conheça nossos produtos"} pageName={"/produtos"}/>
            </div>
        </div>
    )
}