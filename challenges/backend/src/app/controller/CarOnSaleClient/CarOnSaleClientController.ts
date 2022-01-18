import { inject, injectable } from "inversify";
import { CarOnSaleService } from "../../services/CarOnSaleClient/classes/CarOnSaleService";
import { IAuctionBid } from "../../services/CarOnSaleClient/interface/ICarOnSaleClient";

@injectable()
export class CarOnSaleClientController {

    constructor(
        @inject(CarOnSaleService) private carOnSaleClientService: CarOnSaleService) { 
    }

    public async getRunningAuctions(): Promise<IAuctionBid[]> {
        return this.carOnSaleClientService.getRunningAuctions();
    }
}