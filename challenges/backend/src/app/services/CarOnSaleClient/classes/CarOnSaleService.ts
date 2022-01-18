import { injectable } from "inversify";
import { RunningAuctionFixtures } from "../../../fixtures/fixtures";
import { IAuctionBid, ICarOnSaleClient } from "../interface/ICarOnSaleClient";

@injectable()
export class CarOnSaleService implements ICarOnSaleClient {

    public async getRunningAuctions(): Promise<IAuctionBid[]> {
        return RunningAuctionFixtures;
    }
    
}