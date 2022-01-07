import { Body, Controller, Get, Post } from "@nestjs/common";
import { CompanyService } from "./company.service";

@Controller('companies')
export class CompanyController {

    constructor(private readonly companyService: CompanyService) { }


    @Post()
    addCompany(@Body("name") compName: String, @Body("phone") compPhone: String, @Body("address") compAddress: String, @Body("email") compEmail: String) {
        const generatedId = this.companyService.insertCompany(compName, compPhone, compAddress, compEmail);
        return { id: generatedId };
    }

    @Get()
    async getAllCompanies() {
        const companies = await this.companyService.getAllCompanies();
        return companies;
    }
}