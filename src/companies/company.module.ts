import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([
        { name: "Company", schema: 'CompanySchema' }
    ])],
    controllers: [],
    providers: []
})
export class CompanyModule { }