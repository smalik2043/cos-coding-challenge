import "reflect-metadata";
import DIContainer from "./DiContainer";
import { CarOnSaleService } from "../src/app/services/CarOnSaleClient/classes/CarOnSaleService";
import { expect } from "chai";
import { IAuctionBid } from "../src/app/services/CarOnSaleClient/interface/ICarOnSaleClient";
import { CarOnSaleClientController } from "../src/app/controller/CarOnSaleClient/CarOnSaleClientController";

const carOnSaleService: CarOnSaleService = DIContainer.resolve<CarOnSaleService>(CarOnSaleService);
const testrunningAuctionFixture: IAuctionBid[] = [
    {
        id: 1,
        uuid: 'abc-123',
        value: 1000,
        valueNet: 1000,
        isHotBid: true,
        isAutoBid: true,
        clientCategory: 'browser',
        _fk_uuid_auction: 'abc-245',
        _fk_uuid_biddingBuyer: 'abc-234',
        _fk_uuid_triggeringBuyer: 'abc-236',
        createdAt: '18/01/2022, 15:54:21',
        updatedAt: '18/01/2022, 15:54:21',
        deletedAt: '',
    }
]
describe('getListOfRunningAuctionsFromController and testing dependency injection', () => {

  it('getListOfRunningAuctions()', async () => {
    const carOnSaleClientController = new CarOnSaleClientController(carOnSaleService);  
    const runningAuctions: IAuctionBid[] = await carOnSaleClientController.getRunningAuctions();
    expect(runningAuctions).to.eql(testrunningAuctionFixture);
  })
});