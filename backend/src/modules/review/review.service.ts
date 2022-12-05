import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { Company } from "../company/entities/company";
import { User } from "../user/entities/user";
import { Review } from "./entities/review";
import { createReview } from "./interface/create";

export class ReviewService extends RepositoryDB<Review> {
  getRepository(): Repository<Review> {
    return AppDataSource.getRepository(Review);
  }
  async findOneById(id: string) {
    return await this.getRepository().findOne({
      where: {
        id,
      },
      relations: {
        company: true,
        user: true,
      },
    });
  }
  async deleteReview(userId: string, reviewId: string) {
    return await this.getRepository().delete({
      id: reviewId,
      user: {
        id: userId,
      },
    });
  }
  upQuantity(user: User, company: Company, review: createReview | Review) {
    user.reviewsQuantity = user.reviewsQuantity + 1;
    company.ratingGeneral =
      (company.ratingGeneral * company.reviewsQuantity + review.rating) /
      (company.reviewsQuantity + 1);
    company.reviewsQuantity = company.reviewsQuantity + 1;

    return {
      userM: user,
      companyM: company,
    };
  }
  downQuantity(user: User, company: Company, review: Review) {
    user.reviewsQuantity = user.reviewsQuantity - 1;
    company.reviewsQuantity = company.reviewsQuantity - 1;
    company.ratingGeneral =
      (company.ratingGeneral * company.reviewsQuantity - review.rating) /
      (company.reviewsQuantity - 1);

    return {
      userM: user,
      companyM: company,
    };
  }
  async findByUserId(id: string) {
    const entities = await this.getRepository().find({
      where: {
        user: {
          id,
        },
      },
      relations: {
        company: true,
      },
    });
    return entities.map((entity) => ({
      ...entity,
      companyName: entity.company.name,
      companyId: entity.company.id,
      companyURL: entity.company.website,
      company: undefined,
    }));
  }
  async findByCompanyId(id: string) {
    return await this.getRepository().find({
      where: {
        company: {
          id,
        },
      },
      relations: {
        user: true,
      },
    });
  }
}
