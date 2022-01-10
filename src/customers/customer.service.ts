import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Customer } from "./customer.model";

@Injectable()
export class CustomerService {

    constructor(@InjectModel("Customer") private readonly customerModel: Model<Customer>) { }

    async insertCustomer(customerName: string, customerPhone: number, customerAddress: string, customerEmail: string) {
        const newCustomer = new this.customerModel({ name: customerName, phone: customerPhone, address: customerAddress, email: customerEmail });
        const result = await newCustomer.save();

        return result.id as string;
    }

    async getAllCustomer() {
        const customers = await this.customerModel.find().exec();

        return customers.map(customer => ({
            id: customer.id,
            name: customer.name,
            phone: customer.phone,
            address: customer.address,
            email: customer.email
        }))
    }

    async getSingleCustomer(customerId: string) {
        const customer = this.findCustomer(customerId);
        return customer;

    }

    async updateCustomer(customerId: string, customerName: string, customerPhone: number, customerAddress: string, customerEmail: string) {
        const updatedCustomer = await this.findCustomer(customerId);
        if (customerName) {
            updatedCustomer.name = customerName;
        }
        if (customerPhone) {
            updatedCustomer.phone = customerPhone;
        }
        if (customerAddress) {
            updatedCustomer.address = customerAddress;
        }
        if (customerEmail) {
            updatedCustomer.email = customerEmail;
        }
        updatedCustomer.save();

    }

    async findCustomer(customerId: string) {
        let customer;
        try {
            customer = await this.customerModel.findById(customerId).exec();
        } catch (error) {
            throw new NotFoundException("Error ! :Customer not found !");
        }
        if (!customer) {
            throw new NotFoundException("Customer cant found");
        }
        return customer;
    }
    async deleteCustomer(customerId: string) {
        const result = await this.customerModel.deleteOne({ _id: customerId }).exec();
        console.log(result);
        if (result.deletedCount === 0) {
            throw new NotFoundException("Can not find this Customer.");
        }
    }
}