
export type BrandsCard = {
    image: String;
}

export type Products = {
    id?: number;
    name?: string;
    image?: string;
    price?: number;
    description?: string | null;
    sizes?: number[];
}

export type IndividualProduct = {
    id?: number;
    name?: string;
    image?: string;
    price?: number;
    description?: string | null;
    sizes?: number[];
} | null;