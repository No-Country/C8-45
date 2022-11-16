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

    for (let index = 0; index < reviews.length; index++) {
      const review = reviews[index];
      review.company = companies[Math.floor(Math.random() * 10)];
      review.user = users[Math.floor(Math.random() * 10)];
      await reviewRepository.save(review);
    }
  }
}
