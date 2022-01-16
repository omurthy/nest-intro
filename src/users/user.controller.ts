import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("ısers")
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get()
    async getAllUsers() {
        const users = await this.userService.getUsers();
        return users;
    }

    @Get(":id")
    async getUser(@Param("id") userId: string) {
        const result = await this.userService.getSingleuser(userId);
        return result;
    }


    @Post()
    async saveUser(@Body("name") userName: string) {
        const generatedId = await this.userService.insertUser(userName);
        return { id: generatedId }
    };

    @Patch(":id")
    async updateUser(@Param("id") userId: string,
        @Body("name") userName: string) {
        const result = await this.userService.updateUser(userId, userName);
        return result;
    }

    @Get(":id")
    async removeUser(@Param("id") userId: string) {
        const user = this.userService.deleteUser(userId);
        return null;
    }

}
