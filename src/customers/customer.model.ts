import * as mongoose from 'mongoose';
export const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
})
export class Customer extends mongoose.Document {
    id: string;
    name: string;
    phone: number;
    email: string;
    address: string;
}