import Carrousel from "./carrousel";

export default function Brands(){
    return(
        <div className="pt-3 px-2 pb-4 flex flex-col gap-3 items-center w-full md:w-10/12 lg:w-11/12  mx-auto">
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl p-2 text-black-vs mb-3">Nossas Marcas</h1>
            <div className="w-full h-full mb-3 md:mb-5 lg:mb-10">
                <Carrousel/>
            </div>
        </div>
    )
}