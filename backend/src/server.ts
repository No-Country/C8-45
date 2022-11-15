import "dotenv/config";

import { runSeeders } from "typeorm-extension";

import app from "./app";
import AppDataSource from "./database/datasource";
import { Logger } from "./utils/logger";

const server = app.listen(app.get("port"), async () => {
  try {
    await AppDataSource.initialize();
    Logger.info("Base de datos iniciada");
    await runSeeders(AppDataSource);
    Logger.info("seeders iniciados");
  } catch (error) {
    Logger.error(error + "");
    throw new Error("Error en la base de datos");
  }

  Logger.info(
    `App is running at http://localhost:${app.get("port")} in ${app.get(
      "env"
    )} mode`
  );
});

export default server;
