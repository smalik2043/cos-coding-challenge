import { Container } from "inversify";
import { DependencyIdentifier } from "./DependencyIdentifiers";
import { CarOnSaleService } from "./services/CarOnSaleClient/classes/CarOnSaleService";
import { Logger } from "./services/Logger/classes/Logger";
import { ILogger } from "./services/Logger/interface/ILogger";

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

export default container;