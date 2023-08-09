import { Product } from "./Product";

export class Review {
    id: string;
    rating: number;
    title: string;
    description: string;
    approved: boolean;
    product: Product;
    productCode: string;

    constructor(id: string, rating: number, title: string, desc: string, approved: boolean, product: Product, productCode: string) {
        this.id = id;
        this.rating = rating;
        this.title = title;
        this.description = desc;
        this.approved = approved;
        this.product = product;
        this.productCode = productCode
    }
}