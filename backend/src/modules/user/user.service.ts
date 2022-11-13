import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { User } from "./entities/user";

export class userService extends RepositoryDB<User> {
  getRepository(): Repository<User> {
    return AppDataSource.getRepository(User);
  }
}
