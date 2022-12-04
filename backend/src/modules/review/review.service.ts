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
    const entities=await this.getRepository().find({
      where: {
        user: {
          id,
        },
      },
      relations: {
        company: true,
      },
    });
    return entities.map(entity=>({...entity,company:entity.company.website}))
  }
  async findByCompanyId(id: string) {
    return await this.getRepository().findBy({
      company: {
        id,
      },
    });
  }
}
