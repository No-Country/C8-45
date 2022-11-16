import { Router } from "express";

import { ReviewController } from "./review.controller";

const routerUser = Router();

export class ReviewRouter {
  static router = Router();
  static controller = ReviewController;
  static getRoutes() {
    ReviewRouter.router.get("/", ReviewRouter.controller.getReviews);
    return ReviewRouter.router;
  }
}

export default routerUser;
