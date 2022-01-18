import "reflect-metadata";
import container from "./DIContainer";
import { AuctionMonitorApp } from "./AuctionMonitorApp";
import { IAuctionBid } from "./services/CarOnSaleClient/interface/ICarOnSaleClient";
import { CarOnSaleClientController } from "./controller/CarOnSaleClient/CarOnSaleClientController";


/*
 * Inject all dependencies in the application & retrieve application instance.
 */
const app = container.resolve(AuctionMonitorApp);
const carOnSaleController = container.resolve<CarOnSaleClientController>(CarOnSaleClientController);

/*
 * Start the application
 */
(async () => {
    await app.start();
    const runningAuctions: IAuctionBid[] = await carOnSaleController.getRunningAuctions(); // just for testing
    console.log(runningAuctions);
})();
