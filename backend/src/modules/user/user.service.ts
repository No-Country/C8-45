import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { User } from "./entities/user";

export class userService extends RepositoryDB<User> {
  getRepository(): Repository<User> {
    return AppDataSource.getRepository(User);
  }
  async findOneByEmail(email: string) {
    const user = await this.getRepository().findOneBy({
      email,
    });
    if (user) {
      delete user?.password;
      return user;
    }
  }
  async findOneById(id: string) {
    return await this.getRepository().findOneBy({
      id: id,
    });
  }
}
