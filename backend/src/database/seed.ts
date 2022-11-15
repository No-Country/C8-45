import { runSeeders } from "typeorm-extension";

import { Logger } from "../utils/logger";
import AppDataSource from "./datasource";

(async () => {
  await AppDataSource.initialize();
  try {
    await runSeeders(AppDataSource);
  } catch (error) {
    console.log(error);
  }
  Logger.info("seeders iniciados");
  process.exit();
})();
