import Manegement from "@/components/management";
import { fetchProducts } from "../../../../actions/admin/products/actions";

export default async function GerenciamentoPage(){

    const {products, count} = await fetchProducts()

    return(
        <div>
            <Manegement products={products} count={count}/>
        </div>
    )
}