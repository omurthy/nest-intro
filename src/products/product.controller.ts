import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    insertProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {

        const generatedId = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);

        return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        return this.productService.getAllProducts();
    }

}