import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CustomerService } from "./customer.service";

@Controller("customers")
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Post()
    async addCustomer(
        @Body('name') custName: string,
        @Body('phone') custPhone: number,
        @Body('address') custAddress: string,
        @Body('email') custEmail: string) {

        const generatedId = await this.customerService.insertCustomer(custName, custPhone, custAddress, custEmail);

        return { id: generatedId };

    }


    @Get()
    async getAllCustomer() {
        const customers = await this.customerService.getAllCustomer();
        return customers;
    }

    @Get(":id")
    async getCustomer(@Param('id') customerId: string) {
        const customer = await this.customerService.getSingleCustomer(customerId);
        return customer;
    }

    @Patch(":id")
    async updateCustomer(@Param("id") custId: string,
        @Body("name") custName: string,
        @Body("phone") custPhone: number,
        @Body("address") custAddress: string,
        @Body('email') custEmail: string
    ) {
        const result = this.customerService.updateCustomer(custId, custName, custPhone, custAddress, custEmail);
        return null;
    }


    @Delete(":id")
    async removeCustomer(@Param('id') customerId: string) {
        await this.customerService.deleteCustomer(customerId);
        return null;
    }

}