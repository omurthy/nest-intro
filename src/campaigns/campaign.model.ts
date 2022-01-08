import *as mongoose from "mongoose";

export const CampaignSchema = new mongoose.Schema({
    name: { type: String, required: true },
    discount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
})
export class Campaign extends mongoose.Document {
    id: string;
    name: string;
    discount: number
    startDate: Date;
    endDate: Date;
}