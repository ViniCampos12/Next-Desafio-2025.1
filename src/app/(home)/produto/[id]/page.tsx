import Product from "@/components/product";
import { fetchProductById } from "../../../../../actions/individualProduct/actions";

export default async function ProdutoPage({params}: {params: {id: string}}){
    
    const id = parseInt(params.id, 10);
    
    const product = await fetchProductById(id);


    return(
        <div>
            <Product product={product}/>
        </div>
    )
}