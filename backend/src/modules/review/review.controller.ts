import { Request, Response } from "express";

import { Algolia } from "../../common/algolia/algolia";
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

  static async createReviewGeneral(req: Request, res: Response) {
    try {
      const { id } = req.body.user;
      const url = new URL(req.body.companyUrl);
      const user = (await ReviewController.userService.findOneById(id)) as User;
      let company = await ReviewController.companyService.findOneByHostname(
        url.host
      );
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      if (!company) {
        company = await ReviewController.companyService.create({
          ...req.body.company,
          ratingGeneral: 0,
          reviewsQuantity: 0,
          name: req.body.companyName,
          website: url.host,
          role: 3,
        });
        await Algolia.createCompany(company);
      }
      const { companyM, userM } = ReviewController.service.upQuantityR(
        user,
        company,
        req.body.rating
      );
      await ReviewController.userService.getRepository().save(userM as User);
      await ReviewController.companyService
        .getRepository()
        .save(companyM as Company);
      /*       if(!status){
        await Algolia.updateCompany(companyM)
      } */
      let formatDate = req.body.experienceDate.split("");
      formatDate.pop();
      formatDate = formatDate.join("");

      await ReviewController.service.create({
        company: company as Company,
        description: req.body.description,
        rating: req.body.rating,
        user: user as User,
        title: req.body.title,
        experienceDate: formatDate,
      } as Review);
      return res.status(201).send("review creada correctamente");
    } catch (error) {
      console.log(error);
      
      return res.status(400).send("Error al crear la review");
    }
  }
  static async getReviews(req: Request, res: Response) {
    const entity = await ReviewController.service.findAll();
    res.send(entity);
    return;
  }
  static async getMeReviews(req: Request, res: Response) {
    const { id } = await req.body.user;
    const entity = await ReviewController.service.findByUserId(id);
    res.status(200).send(entity);
    return;
  }
  static async getMeReviewsCompany(req: Request, res: Response) {
    const { id } = await req.body.user;
    const entity = await ReviewController.service.findByCompanyId(id);
    entity.map((ent) => {
      delete ent.user.password;
      return ent;
    });
    res.status(200).send(entity);
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
      const { companyM, userM } = ReviewController.service.upQuantity(
        user,
        company,
        review
      );
      await ReviewController.userService.getRepository().save(userM as User);
      await ReviewController.companyService
        .getRepository()
        .save(companyM as Company);
      return res.status(201).send("review creada correctamente");
    } catch (error) {
      throw res.status(500).send("server error");
    }
  }
  static async deleteReview(req: Request, res: Response) {
    const { id } = req.body.user;
    const reviewId = req.params.id;

    const user = await ReviewController.userService.findOneById(id);
    if (!user) {
      return res.status(400).send("usuario no encontrado");
    }
    const review = await ReviewController.service.findOneById(reviewId);
    if (!review) {
      return res.status(400).send("Review wasn't found");
    }

    const company = await ReviewController.companyService.findOneById(
      review.company.id
    );
    if (!company) {
      return res.status(400).send("company wasn't found");
    }
    const del = await ReviewController.service.deleteReview(id, reviewId);

    if (del.affected === 0) {
      return res
        .status(400)
        .send("Review wasn't found or isn't your property or wasn't found");
    }
    const { companyM, userM } = ReviewController.service.downQuantity(
      user,
      company,
      review
    );
    await ReviewController.userService.getRepository().save(userM as User);
    await ReviewController.companyService
      .getRepository()
      .save(companyM as Company);
    return res.status(201).send("review was delete");
  }

  static async updateReview(req: Request, res: Response) {
    const { id } = req.params;
    const userId = req.body.user.id;
    const { title, rating, description,experienceDate } = req.body;
    console.log(req.body);
    
    let formatDate
    if(experienceDate){
formatDate= experienceDate.split("");
formatDate.pop();
formatDate = formatDate.join("");
    }


    try {
      if(rating){
        
        const rv = await ReviewController.service.findOneById(id)

        if(rv){
          const company=rv.company
          console.log(company);
          console.log(rv);
          
          console.log(((company.ratingGeneral*company.reviewsQuantity)-rv.rating+rating),company.reviewsQuantity,((company.ratingGeneral*company.reviewsQuantity)-rv.rating+rating)/company.reviewsQuantity);
          
          company.ratingGeneral=((company.ratingGeneral*company.reviewsQuantity)-(+rv.rating)+rating)/company.reviewsQuantity
          console.log(company);
          
          await ReviewController.companyService.getRepository().save(company)
        }
        
      }
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
          experienceDate:formatDate
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
