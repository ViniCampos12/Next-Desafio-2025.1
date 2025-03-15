"use server"

import prisma from "../../lib/db"



export default async function getHighlightsProducts() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            image: true,
            price: true
        },
        take: 6,
        orderBy: {
            id: "desc"
        }
    })

    return products;
}