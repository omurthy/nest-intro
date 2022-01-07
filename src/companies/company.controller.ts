import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CompanyService } from "./company.service";

@Controller('companies')
export class CompanyController {

    constructor(private readonly companyService: CompanyService) { }


    @Post()
    async addCompany(@Body("name") compName: String, @Body("phone") compPhone: String, @Body("address") compAddress: String, @Body("email") compEmail: String) {
        const generatedId = await this.companyService.insertCompany(compName, compPhone, compAddress, compEmail);
        return { id: generatedId };
    }

    @Get()
    async getAllCompanies() {
        const companies = await this.companyService.getAllCompanies();
        return companies;
    }

    @Get(":id")
    async getCompany(@Param("id") companyId: string) {
        const company = await this.companyService.getSingleCompany(companyId);
        return company;
    }

    @Patch(":id")
    async updateCompany(@Param("id") companyId: string,
        @Body("name") companyName: string,
        @Body("phone") companyPhone: number,
        @Body("address") companyAddress: string,
        @Body("email") companyEmail: string) {

        await this.companyService.updateCompany(companyId, companyName, companyPhone, companyAddress, companyEmail);
        return null;
    }

    @Delete(":id")
    async deleteCompany(@Param("id") companyId: string) {
        await this.companyService.deleteCompany(companyId);
        return null;
    }


}