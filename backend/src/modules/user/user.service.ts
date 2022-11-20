import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { User } from "./entities/user";

export class userService extends RepositoryDB<User> {
  getRepository(): Repository<User> {
    return AppDataSource.getRepository(User);
  }
  async findOneByEmail(email: string) {
    return await this.getRepository().findOneBy({
      email,
    });
  }
  async findOneById(id: string) {
    return await this.getRepository().findOneBy({
      id: id,
    });
  }
}
