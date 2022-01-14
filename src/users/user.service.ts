import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel: Model<User>) {

    }

    async getUsers() {
        const users = await this.userModel.find();
        return users.map(user => ({
            id: user.id,
            name: user.name
        }))
    };
} 