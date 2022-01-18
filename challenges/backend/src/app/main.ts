import {Container} from "inversify";
import {ILogger} from "./services/Logger/interface/ILogger";
import {Logger} from "./services/Logger/classes/Logger";
import {DependencyIdentifier} from "./DependencyIdentifiers";
import {AuctionMonitorApp} from "./AuctionMonitorApp";
import { CarOnSaleService } from "./services/CarOnSaleClient/classes/CarOnSaleService";
import { IAuctionBid } from "./services/CarOnSaleClient/interface/ICarOnSaleClient";

/*
 * Create the DI container.
 */
const container = new Container({
    defaultScope: "Singleton",
});

/*
 * Register dependencies in DI environment.
 */
container.bind<ILogger>(DependencyIdentifier.LOGGER).to(Logger);
container.bind<CarOnSaleService>(CarOnSaleService).toSelf();
/*
 * Inject all dependencies in the application & retrieve application instance.
 */
const app = container.resolve(AuctionMonitorApp);
const carOnSaleService: CarOnSaleService = container.resolve<CarOnSaleService>(CarOnSaleService);

/*
 * Start the application
 */
(async () => {
    await app.start();
    const runningAuctions: IAuctionBid[] = await carOnSaleService.getRunningAuctions();
    console.log(runningAuctions);
})();
