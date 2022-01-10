import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Campaign } from "./campaign.model";

@Injectable()
export class CampaignService {
    constructor(@InjectModel('Campaign') private readonly campaignModel: Model<Campaign>) { }

    async insertCampaign(campaignName: string, discount: number, startDate: Date, endDate: Date) {
        const newCampaign = new this.campaignModel({ name: campaignName, discount: discount, startDate: startDate, endDate: endDate });
        const result = await newCampaign.save();

        return result.id as string;
    }

    async updateCampaign(campaignId: string, campaignName: string, discount: number, startDate: Date, endDate: Date) {
        const campaign = await this.findCampaign(campaignId);
        if (campaignName) {
            campaign.name = campaignName;
        }
        if (discount) {
            campaign.discount = discount;
        }
        if (startDate) {
            campaign.startDate = startDate;
        }
        if (endDate) {
            campaign.endDate = endDate;
        }
        await campaign.save();
        return null;
    }

    async getAllCampaigns() {
        const campaigns = await this.campaignModel.find();
        return campaigns.map(campaign => ({ id: campaign.id, name: campaign.name, discount: campaign.discount, startDate: campaign.startDate, endDate: campaign.endDate }));
    }

    async getSingleCampaign(campaignId: string) {
        const campaign = await this.findCampaign(campaignId);
        return { id: campaign.id, name: campaign.name, discount: campaign.discount, startDate: campaign.startDate, endDate: campaign.endDate };
    }


    async deleteCampaign(campaignId: string) {
        const result = await this.campaignModel.deleteOne({ _id: campaignId });
        if (result.deletedCount === 0) {
            throw new NotFoundException("Campaign Not Found!");
        }
    }

    async findCampaign(campaignId: string) {
        let campaign;

        try {
            campaign = await this.campaignModel.findById(campaignId);
        } catch (error) {
            throw new NotFoundException("Error ! : Campaign Not Found!")
        }
        if (!campaign) {
            throw new NotFoundException("Campaign Not Found!")
        }
        return campaign;
    }
}