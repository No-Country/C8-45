import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { Review } from "./entities/review";

export class ReviewService extends RepositoryDB<Review> {
  getRepository(): Repository<Review> {
    return AppDataSource.getRepository(Review);
  }
  async findOneById(id: string) {
    return await this.getRepository().findOneBy({
      id,
    });
  }
  async findByUserId(id: string) {
    return await this.getRepository().findOne({
      where: {
        user: {
          id,
        },
      },
      relations: {
        company: true,
      },
    });
  }
  async findByCompanyId(id: string) {
    return await this.getRepository().findBy({
      company: {
        id,
      },
    });
  }
}
