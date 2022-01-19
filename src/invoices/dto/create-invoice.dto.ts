import * as mongoose from 'mongoose';

export const InvoiceSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    customerId: { type: String, required: true },
    customerName: { type: String, required: true },
    discount: { type: Number, required: true },
});
export class CreateInvoiceDto extends mongoose.Document {
    id: string;
    productName: string;
    price: number;
    customerId: string;
    customerName: string;
    discount: string;
}
