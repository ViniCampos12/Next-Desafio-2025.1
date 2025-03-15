"use server"

import { revalidatePath } from "next/cache";
import prisma from "../../../lib/db"
import { redirect } from "next/navigation";

const itemsPerPage = 6;

export async function fetchProducts(currentPage:number){
    const offset = (currentPage - 1)*itemsPerPage;
    const products = await prisma.product.findMany({
        orderBy: {
            id: "asc",
        },
        // take: itemsPerPage,
        skip: offset
    });

    const count = await prisma.product.count();

    const totalPages = Math.ceil(count / itemsPerPage);

    return {products,count,totalPages}
}

export async function deleteProduct(id:number | undefined){
    await prisma.product.delete({
        where: {id},
    });

    revalidatePath("/gerenciamento")
}

export async function createProduct(formData:FormData) {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const sizes = formData.get("sizes") as string;
    const sizesArray = sizes ? sizes.split(",").map(size => Number(size.trim())).filter(num => !isNaN(num)) : [];
    const description = formData.get("description") as string;
    const imageFile = formData.get("image") as File;

    if (imageFile.size > 5 * 1024 * 1024) { // 5MB
        throw new Error("A imagem deve ter no máximo 5MB.");
      }

    const imageBuffer = await imageFile.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    const image = `data:${imageFile.type};base64,${imageBase64}`; 

    await prisma.product.create({
        data: {
            name,
            price,
            sizes: sizesArray,
            description,
            image,
        }
    })

    redirect("/gerenciamento")
}

export async function updateProduct(id:number | undefined, formData:FormData) {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const sizes = formData.get("sizes") as string;
    const sizesArray = sizes ? sizes.split(",").map(size => Number(size.trim())).filter(num => !isNaN(num)) : [];
    const description = formData.get("description") as string;
    const imageFile = formData.get("image") as File;

    if (imageFile.size > 5 * 1024 * 1024) { // 5MB
        throw new Error("A imagem deve ter no máximo 5MB.");
      }

    const imageBuffer = await imageFile.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    const image = `data:${imageFile.type};base64,${imageBase64}`; 

    await prisma.product.update({
        where: {id},
        data: {
            name,
            price,
            sizes: sizesArray,
            description,
            image,
        }
    })

    redirect("/gerenciamento")
}