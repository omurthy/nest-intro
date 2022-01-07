import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Company } from "./company.model";


@Injectable()
export class CompanyService {
    constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) { }

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

    async insertCompany(name, phone, address, email) {
        const company = new this.companyModel({ name: name, phone: phone, address: address, email: email });
        const result = await company.save();
        //console.log(result);
        return result.id as string;
    }
}