import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    products: Product[] = [];

    insertProduct(title: string, desc: string, price: number): any {
        const prodId = Math.floor(100000 + Math.random() * 900000).toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);

        return prodId;
    }

    getAllProducts() {
        return [...this.products];
    }
    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }

    updateProduct(productId: string, title: string, desc: string, price: number) {
        const [product, index] = this.findProduct(productId);
        const updatedProduct = { ...product }
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        this.products[index] = updatedProduct;
    }
    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException("Product not found !");
        }
        return [product, productIndex];
    }
}