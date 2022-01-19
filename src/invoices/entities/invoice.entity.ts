import * as mongoose from 'mongoose';

export const invoiceSchema = new mongoose.Model({
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    lastPayingDate: { type: Date, required: true }
});
export class Invoice extends mongoose.Document {

    id: string;
    name: string;
    price: number;
    lastPayingDate: Date;

}
