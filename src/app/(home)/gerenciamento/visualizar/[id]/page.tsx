import ViewProduct from "@/components/crudProducts/view";
import { fetchProductById } from "../../../../../../actions/individualProduct/actions";

export default async function VisualizarPage({params} : {params: {id:string}}){

    const id = parseInt(params.id,10);
    const product = await fetchProductById(id);

    if (!product) {
        return <div className="text-center mt-10 text-red-500">Produto não encontrado.</div>;
      }

    return(
        <div className="flex justify-center items-center">
            <ViewProduct product={product}/>
        </div>
    )
}