import "dotenv/config";

import * as path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import UserSeeder from "./seeds/user";
import UserFactory from "./factories/user";
console.log(__dirname + "../");

const options: DataSourceOptions & SeederOptions = {
  type: process.env.DB_DRIVER as "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  seeds: [UserSeeder],
  factories: [UserFactory],
  migrations: [path.join(__dirname + "/migrations/*{.js,.ts}")],
  entities: [path.join(__dirname + "/../modules/**/entities/*{.js,.ts}")],
};

/* seeds: [path.join(__dirname + "/seeds/seeder/*{.js,.ts}")],
factories: [path.join(__dirname + "/seeds/factories/*{.js,.ts}")], */
const AppDataSource: DataSource = new DataSource(options);

export default AppDataSource;
