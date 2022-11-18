import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";

import { CompanyService } from "../../modules/company/company.service";
import { Review } from "../../modules/review/entities/review";
import { ReviewService } from "../../modules/review/review.service";
import { userService } from "../../modules/user/user.service";

export default class ReviewAsSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const user = new userService();
    const company = new CompanyService();
    const users = await user.findAll();
    const companies = await company.findAll();
    const review = new ReviewService();
    const reviews = await review.findAll();
    const reviewRepository = dataSource.getRepository(Review);

    const indexU = [];
    const indexC = [];

    for (let index = 0; index < reviews.length; index++) {
      indexU.push(Math.floor(Math.random() * 10));
      indexC.push(Math.floor(Math.random() * 10));
    }

    for (let index = 0; index < reviews.length; index++) {
      const element = indexU[index];
      const userI = users[element];
      userI.reviewsQuantity = userI.reviewsQuantity + 1;
      await user.getRepository().save(userI);
    }

    for (let index = 0; index < reviews.length; index++) {
      const element = indexC[index];
      const companyI = companies[element];
      companyI.reviewsQuantity = companyI.reviewsQuantity + 1;
      await company.getRepository().save(companyI);
    }

    for (let index = 0; index < reviews.length; index++) {
      const companyI = companies[indexC[index]];
      const userI = users[indexU[index]];
      const review = reviews[index];
      review.company = companyI;
      review.user = userI;
      await reviewRepository.save(review);
    }

    /*     for (let index = 0; index < reviews.length; index++) {
      const companyI = companies[Math.floor(Math.random() * 10)]
      const review = reviews[index];
      review.company = companyI;
      review.user = userI;
      indexU.push()
      userI.reviewsQuantity=userI.reviewsQuantity+1
      companyI.reviewsQuantity=companyI.reviewsQuantity+1
    } */
  }
}
