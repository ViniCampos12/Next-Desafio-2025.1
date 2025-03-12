import { Products } from "../../../types/data";
import ButtonVs from "../buttonVs";
import Card from "./card";


type HighlightsProductsProps = {
    products: Products[] 
}

export default function Highlights({products}: HighlightsProductsProps){
    return(
        <section className="pt-3 px-2 pb-4 flex flex-col items-center space-y-4 md:space-y-10 w-full  bg-gradient-to-r from-gray-vs/30 to-black-bg/30 md:pb-10">
            <h1 className="text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl p-2 text-black-vs cursor-default">Produtos em Destaque</h1>
            <div className="flex flex-wrap w-full h-auto gap-12 justify-center lg:px-40 lg:gap-y-11 lg:gap-x-20">
                {products.map((product, index) => (
                    <Card key={index} product={product}/>
                ))}
                
            </div>
            <ButtonVs text={"Veja mais"} pageName={"/produtos"}/>
        </section>
    )
}