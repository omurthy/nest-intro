import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CampaignService } from "./campaign.service";

@Controller("campaigns")
export class CampaignController {
    constructor(private readonly campaignService: CampaignService) { }

    @Post()
    async addCampaign(
        @Body("name") campaignName: string,
        @Body("discount") campDiscount: number,
        @Body("startDate") campStartDate: Date,
        @Body("endDate") campEndDate: Date,) {
        const generatedId = await this.campaignService.insertCampaign(campaignName, campDiscount, campStartDate, campEndDate);

        return { id: generatedId }
    }

    @Get()
    async getCampaigns() {
        const campaigns = await this.campaignService.getAllCampaigns();
        return campaigns;
    }

    @Get(":id")
    async getCompaign(@Param("id") campaignId: string) {
        const compaign = await this.campaignService.getSingleCampaign(campaignId);
        return compaign;
    }

    @Patch(":id")
    async updateCampaign(@Param("id") campaignId: string,
        @Body("name") campaignName: string,
        @Body("discount") campDiscount: number,
        @Body("startDate") campStartDate: Date,
        @Body("endDate") campEndDate: Date,) {
        const compaign = await this.campaignService.updateCampaign(campaignId, campaignName, campDiscount, campStartDate, campEndDate);
        return null;
    }

    @Delete(":id")
    async removeCompaign(@Param("id") campaignId: string) {
        const campaign = await this.campaignService.deleteCampaign(campaignId);
        return null;
    }
}