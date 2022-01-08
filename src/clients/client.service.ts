import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Client } from "./client.model";

@Injectable()
export class ClientService {
    constructor(@InjectModel('Client') private readonly clientModel: Model<Client>) { }

    async getSingleClient(clientId: string) {
        const client = await this.findClient(clientId);
        return client({
            id: client.id,
            name: client.name,
            companyId: client.companyId,
            productId: client.productId
        });
    }
    async getAllClients() {
        const clients = await this.clientModel.find();
        return clients.map(client => ({
            id: client.id,
            name: client.name,
            companyId: client.companyId,
            productId: client.productId
        }))
    }
    async insertClient(clientName: string, companyId: string, productId: string) {
        const newClient = new this.clientModel({ name: clientName, companyId: companyId, productId: productId });
        const result = await newClient.save();
        return result.id as string;
    }
    async updateClient(clientId: string, clientName: string, companyId: string, productId: string) {
        const updateClient = await this.findClient(clientId);
        if (clientName) {
            updateClient.name = clientName;
        }
        if (companyId) {
            updateClient.companyId = companyId;
        }
        if (productId) {
            updateClient.productId = productId;
        }
        updateClient.save();
    }

    async findClient(clientId: string) {
        let client;
        try {
            client = await this.clientModel.findById(clientId);
        } catch (error) {
            throw new NotFoundException("Error :Client Not found!");
        }
        if (!client) {
            throw new NotFoundException("Client not found");
        }
        return client;
    }
    async deleteClient(clientId: string) {
        const result = await this.clientModel.deleteOne({ _id: clientId });
        if (result.deletedCount === 0) {
            throw new NotFoundException("Client not Found!");
        }
    }

}