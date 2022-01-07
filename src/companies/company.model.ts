import * as mongoose from "mongoose";

export const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true }
})
export class Company extends mongoose.Document {
    id: string;
    name: string;
    phone: number;
    address: string;
    email: string;
}