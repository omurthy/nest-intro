import { Controller, Get, Post } from "@nestjs/common";
import { CompanyService } from "./company.service";

@Controller('companies')
export class CompanyController {

    constructor(private readonly companyService: CompanyService) { }


    @Post()

    @Get()
    async getAllCompanies() {
        const companies = await this.companyService.getAllCompanies();
        return companies;
    }
}