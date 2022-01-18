import { IAuctionBid } from "../services/CarOnSaleClient/interface/ICarOnSaleClient";

export const RunningAuctionFixtures: IAuctionBid[] = 
    [
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
