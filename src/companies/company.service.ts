import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Company } from "./company.model";


@Injectable()
export class CompanyService {
    constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }

    async insertCompany(name, phone, address, email) {
        const company = new this.companyModel({ name: name, phone: phone, address: address, email: email });
        const result = await company.save();
        //console.log(result);
        return result.id as string;
    }
    async getAllCompanies() {
        const companies = await this.companyModel.find().exec();
        return companies.map(company => ({
            id: company.id,
            name: company.name,
            phone: company.phone,
            address: company.address,
            email: company.email
        }));
    }

    async getSingleCompany(companyId: string) {
        const company = await this.findCompany(companyId);
    }
    async updateCompany(companyId: string, compName: string, compPhone: string, compAddress: string, compEmail: string) {
        const company = await this.findCompany(companyId);
    }
    async deleteCompany(companyId: string) {
        const company = await this.findCompany(companyId);
    }

    async findCompany(companyId: string): Promise<Company> {

        let company;
        try {
            company = await this.findCompany(companyId);
        } catch (error) {
            throw new NotFoundException("Error ! Company Not Found");
        }
        if (!company) {
            throw new NotFoundException("Company can't found.Is your companyId correct ?");
        }

        return company;
    }
}