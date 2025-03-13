import EditProduct from "@/components/crudProducts/edit";
import { fetchProductById } from "../../../../../../actions/individualProduct/actions";

export default async function EditarPage({params}: {params: {id:string}}){
    
    const id = parseInt(params.id,10);
    const product = await fetchProductById(id);

    if (!product) {
        return <div className="text-center mt-10 text-red-500">Produto não encontrado.</div>;
      }
    

    return(
        <div className="flex justify-center items-center">
            <EditProduct product={product}/>
        </div>
    )
}