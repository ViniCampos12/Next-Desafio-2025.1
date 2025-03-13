import Store from "@/components/store";
import { fetchFilteredProducts } from "../../../../actions/search/actions";

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: {
        query?:string;
        page?:string;
    }
}) {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const {products,count,totalPages} = await fetchFilteredProducts(query,currentPage)

    return(
        <div>
            <Store products={products} count={count} totalPages={totalPages} />
        </div>
    )
}