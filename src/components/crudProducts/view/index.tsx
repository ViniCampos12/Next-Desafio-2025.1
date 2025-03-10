import Image from "next/image";

export default function ViewProduct(){
    return(
        <div className=" bg-primary rounded-lg w-72 md:w-96 lg:w-[544px] mt-10 mb-10 flex flex-col space-y-3 items-center px-4 lg:px-5 py-4 text-white-vs">
            <div className="w-11/12 flex justify-center max-h-52 md:w-10/12 lg:w-9/12 md:max-h-60 lg:max-h-64">
                <Image
                    src="/home/airJordan1.png"
                    alt="Foto do produto"
                    width={904}
                    height={904}
                    className="object-cover rounded-md shadow-sm "
                    />
            </div>
            <h1 className="text-center text-lg md:text-xl lg:text-2xl ">Air Jordan 1 High OGMidnight Navy</h1>
            <h2 className="text-center text-lg md:text-xl lg:text-2xl ">R$800,00</h2>
            <p className="text-justify text-sm lg:text-base">Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.</p>
            <p className="text-justify text-sm lg:text-base">Tamanho disposníveis: 32, 33, 34, 35, 36, 38, 39, 40, 42</p>
        </div>
    )
}