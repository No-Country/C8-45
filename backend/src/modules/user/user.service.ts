import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { Company } from "../company/entities/company";
import { Review } from "../review/entities/review";
import { User } from "./entities/user";

export class userService extends RepositoryDB<User> {
  getRepository(): Repository<User> {
    return AppDataSource.getRepository(User);
  }
}
