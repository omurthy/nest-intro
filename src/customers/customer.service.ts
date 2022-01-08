import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Customer } from "./customer.model";

@Injectable()
export class CustomerService {
    constructor(@InjectModel("Customer") private readonly customerModel: Model<Customer>) { }
}