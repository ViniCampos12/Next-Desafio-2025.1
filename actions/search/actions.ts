import prisma from "../../lib/db";

const itemsPerPage = 6;

export async function fetchFilteredProducts(query: string, currentPage: number){
    const offset = (currentPage - 1)*itemsPerPage;
    
    const products = await prisma.product.findMany({
        where: {
            OR: [{name: {contains: query, mode: "insensitive"}}]
        },
        orderBy: {
            name: "asc"
        },

        take: itemsPerPage,
        skip: offset
    });

    const count = await prisma.product.count({
        where: {
            OR: [{name: {contains: query, mode: "insensitive"}}]
        },
    });

    const totalPages = Math.ceil(count / itemsPerPage);

    return {products,count,totalPages};
}