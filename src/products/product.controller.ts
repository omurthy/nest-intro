import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    async addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {

        const generatedId = await this.productService.insertProduct(prodTitle, prodDesc, prodPrice);

        return { id: generatedId };
    }

    @Get()
    async getAllProducts() {
        const products = await this.productService.getAllProducts();
        return products;
    }

    @Get(":id")
    getProduct(@Param("id") prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(":id")
    async updateProduct(@Param("id") prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        await this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(":id")
    async removeProduct(@Param("id") prodId: string) {
        await this.productService.deleteProduct(prodId)
        return null;
    }

}