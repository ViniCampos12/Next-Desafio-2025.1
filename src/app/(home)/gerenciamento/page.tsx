import Manegement from "@/components/management";
import { fetchProducts } from "../../../../actions/admin/products/actions";

export default async function GerenciamentoPage({params}: {params:{page:string}}){

    const currentPage = Number(params?.page) || 1;
    const {products, count, totalPages} = await fetchProducts(currentPage)

    return(
        <div>
            <Manegement products={products} count={count} totalPages={totalPages}/>
        </div>
    )
}