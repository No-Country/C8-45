import "dotenv/config";

import * as path from "path";
import { DataSource } from "typeorm";
console.log(__dirname + "../");

const AppDataSource = new DataSource({
  type: process.env.DB_DRIVER as "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [path.join(__dirname + "/migrations/*{.js,.ts}")],
  entities: [path.join(__dirname + "/../modules/**/entities/*{.js,.ts}")],
});

export default AppDataSource;
