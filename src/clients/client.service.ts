import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Client } from "./client.model";

@Injectable()
export class ClientService {
    constructor(@InjectModel('Client') private readonly clientModel: Model<Client>) { }
}