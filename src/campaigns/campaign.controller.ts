import { Controller } from "@nestjs/common";
import { CustomerService } from "src/customers/customer.service";

@Controller()
export class CampaignController {
    constructor(private readonly customerService: CustomerService) { }

}