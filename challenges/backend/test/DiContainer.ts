import { Container, injectable } from "inversify";
import { ICarOnSaleClient, IAuctionBid } from "../src/app/services/CarOnSaleClient/interface/ICarOnSaleClient";
import { RunningAuctionFixtures } from "../src/app/fixtures/fixtures";
import { CarOnSaleService } from "../src/app/services/CarOnSaleClient/classes/CarOnSaleService";

@injectable()
export class MockCarOnSaleService implements ICarOnSaleClient {

    async getRunningAuctions(): Promise<IAuctionBid[]> {
        return RunningAuctionFixtures;
    }
    
}

const DIContainer = new Container();
DIContainer.bind<CarOnSaleService>(CarOnSaleService).to(MockCarOnSaleService);

export default DIContainer;