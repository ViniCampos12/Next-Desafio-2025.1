"use server"

import prisma from "../../lib/db"

// model Product {
//     id          Int       @id @default(autoincrement())
//     name        String    @unique
//     image        String
//     description String?
//     price       Float
//     sizes       Int[]
//   }


export default async function getHighlightsProducts() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            image: true,
            price: true
        },
        take: 6
    })

    return products;
}