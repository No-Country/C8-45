import "dotenv/config";

import * as path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

import UserFactory from "./factories/user";
import CompanyFactory from "./factories/company";

import RoleSeeder from "./seeds/role";
import UserSeeder from "./seeds/user";
import CompanySeeder from "./seeds/company";

const options: DataSourceOptions & SeederOptions = {
  type: process.env.DB_DRIVER as "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  seeds: [RoleSeeder, UserSeeder, CompanySeeder],
  factories: [UserFactory, CompanyFactory],
  migrations: [path.join(__dirname + "/migrations/*{.js,.ts}")],
  entities: [path.join(__dirname + "/../modules/**/entities/*{.js,.ts}")],
};

const AppDataSource: DataSource = new DataSource(options);

export default AppDataSource;
