import { Review } from "./Review";

export class Product {
    productCode: string;
    productName: string;
    brand: string;
    reviews: Array<Review> = [];
    reviewTotal: number;
    reviewsApproved: number;

    constructor(prod_id: string, prod_name: string, prod_brand: string, reviews: Review[], reviewTotal: number, reviewsApproved: number) {
        this.productCode = prod_id,
        this.productName = prod_name,
        this.brand = prod_brand;
        this.reviews = reviews;
        this.reviewTotal = reviewTotal;
        this.reviewsApproved = reviewsApproved;
    }
}