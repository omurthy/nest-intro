import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CampaignController } from "./campaign.controller";
import { CampaignSchema } from "./campaign.model";
import { CampaignService } from "./campaign.service";


@Module({
    imports: [MongooseModule.forFeature([
        { name: "Campaign", schema: CampaignSchema }
    ])],
    controllers: [CampaignController],
    providers: [CampaignService]
})
export class CampaignModule { } 