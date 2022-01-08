import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ClientService } from "./client.service";

@Controller("clients")
export class ClientController {
    constructor(private readonly clientService: ClientService) { }

    @Post()
    async insertClient(@Body('name') clientName: string,
        @Body('companyId') companyId: string,
        @Body('productId') productId: string
    ) {
        const generatedId = await this.clientService.insertClient(clientName, companyId, productId);
        return { id: generatedId };
    }

    @Get()
    async getAllClients() {
        const clients = await this.clientService.getAllClients();
        return clients;
    }

    @Get(":id")
    async getSingleClients(@Param("id") clientId: string) {
        const client = await this.clientService.getSingleClient(clientId);
        return client;
    }

    @Patch(":id")
    async updateClient(@Param("id") clientId: string,
        @Body("name") clientName: string,
        @Body("companyId") clientCompanyId: string,
        @Body("productId") clientProductId: string
    ) {
        const result = await this.clientService.updateClient(clientId, clientName, clientCompanyId, clientProductId);
        return null;
    }

    @Delete(":id")
    async removeClient(@Param("id") clientId: string) {
        await this.clientService.deleteClient(clientId);
        return null;
    }
}