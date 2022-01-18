/**
 * This service describes an interface to access auction data from the CarOnSale API.
 */
export interface ICarOnSaleClient {

    getRunningAuctions(): Promise<IAuctionBid[]>

}

//assuming this could be the client categories.
export type ClientCategory = 'browser'|'mobile'|'tablet'

// I took it from the swagger defintions
export interface IAuctionBid {
    id: number;
    uuid: string;
    value: number;
    valueNet: number;
    isHotBid: boolean;
    isAutoBid: boolean;
    clientCategory: ClientCategory;
    _fk_uuid_auction: string;
    _fk_uuid_biddingBuyer: string;
    _fk_uuid_triggeringBuyer: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}