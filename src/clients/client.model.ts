import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    companyId: { type: String, required: true },
    productId: { type: String, required: true },
})
export class Client extends mongoose.Document {
    id: string;
    name: string;
    companyId: string;
    productId: string;
}