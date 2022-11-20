import { Request, Response } from "express";

import { CompanyService } from "../company/company.service";
import { Company } from "../company/entities/company";
import { User } from "../user/entities/user";
import { userService } from "../user/user.service";
import { Review } from "./entities/review";
import { createReview } from "./interface/create";
import { ReviewService } from "./review.service";

export class ReviewController {
  static service = new ReviewService();
  static companyService = new CompanyService();
  static userService = new userService();
  static async getReviews(req: Request, res: Response) {
    const entity = await ReviewController.service.findAll();
    res.send(entity);
    return;
  }

  static async createReview(req: Request, res: Response) {
    const { id } = req.body.user;
    const review = req.body as createReview;
    try {
      const company = await ReviewController.companyService.findOneById(
        review.company
      );
      if (!company) {
        return res.status(400).send("company wasn't found");
      }
      const user = await ReviewController.userService.findOneById(id);
      if (!user) {
        return res.status(400).send("usuario no encontrado");
      }
      await ReviewController.service.create({
        company: company as Company,
        description: review.description,
        rating: review.rating,
        user: user as User,
        title: review.title,
      } as Review);
      user.reviewsQuantity = user.reviewsQuantity + 1;
      company.reviewsQuantity = company.reviewsQuantity + 1;
      company.ratingGeneral =
        (company.ratingGeneral * company.reviewsQuantity + review.rating) /
        (company.reviewsQuantity + 1);

      await ReviewController.userService.getRepository().save(user as User);
      await ReviewController.companyService
        .getRepository()
        .save(company as Company);
      return res.status(201).send("review creada correctamente");
    } catch (error) {
      throw res.status(500).send("server error");
    }
  }
  static async updateReview(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.body.user.id;
    const { title, rating, description } = req.body;
    try {
      console.log(userId, id);

      const review = await ReviewController.service.getRepository().update(
        {
          id,
          user: {
            id: userId,
          },
        },
        {
          title,
          rating,
          description,
        }
      );
      if (review.affected === 0) {
        return res
          .status(400)
          .send("Review wasn't found or isn't your property");
      }
      return res.status(201).send("review actualizado correctamente");
    } catch (error) {
      throw res.status(500).send("server error");
    }
  }
}
