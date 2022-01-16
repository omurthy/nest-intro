import { Injectable, NotFoundException } from "@nestjs/common";
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

    async getSingleuser(id: string) {
        const result = await this.findUser(id);
        return { id: result.id, name: result.name }
    }
    async insertUser(name: string) {
        const newUser = new this.userModel({ name: name });
        const result = await newUser.save();

        return result.id as string;
    }

    async updateUser(id: string, userName: string) {
        const foundedUser = await this.findUser(id);
        if (userName)
            foundedUser.name = userName;

        foundedUser.save();
    }

    async deleteUser(id: string) {
        const deleteUser = await this.userModel.deleteOne({ _id: id }).exec();
        if (deleteUser.deletedCount == 0)
            throw new NotFoundException("User not deleted");
    }

    async findUser(UserId: string) {
        let result;
        try {
            result = await this.userModel.findById(UserId);
        } catch (error) {
            throw new NotFoundException("ERROR ! : Not Found User");
        }

        if (!result)
            throw new NotFoundException("Not founded user");

        return result;
    }
} 