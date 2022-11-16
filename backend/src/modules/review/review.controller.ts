import { Request, Response } from "express";
import { ReviewService } from "./review.service";

export class ReviewController {
  static service = new ReviewService();
  static async getReviews(req: Request, res: Response) {
    const entity = await ReviewController.service.findAll();
    res.send(entity);
    return;
  }
}
