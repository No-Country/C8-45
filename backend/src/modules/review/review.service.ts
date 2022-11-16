import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { Review } from "./entities/review";

export class ReviewService extends RepositoryDB<Review> {
  getRepository(): Repository<Review> {
    return AppDataSource.getRepository(Review);
  }
}
