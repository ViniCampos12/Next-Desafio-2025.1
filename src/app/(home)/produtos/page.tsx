import Store from "@/components/store";

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: {
        query?:string;
        page?:string;
    }
}) {

    const query = searchParams?.query || '';
    const page = searchParams?.page || 1;

    return(
        <div>
            <Store/>
        </div>
    )
}