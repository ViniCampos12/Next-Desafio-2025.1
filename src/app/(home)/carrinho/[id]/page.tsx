import Cart from "@/components/cart";
import { fetchProductById } from "../../../../../actions/individualProduct/actions";

export default async function carrinhoPage({params}: {params: {id: string}}){
    const id = parseInt(params.id, 10);
    
    const product = await fetchProductById(id);
    return(
        <div className="min-h-svh">
            <Cart product={product}/>
        </div>
    )
}