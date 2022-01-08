import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Campaign } from "./campaign.model";

@Injectable()
export class CampaignService {
    constructor(@InjectModel('Campaign') private readonly campaignModel: Model<Campaign>) { }
}