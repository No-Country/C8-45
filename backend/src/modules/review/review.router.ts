import { Router } from "express";

import { CommonValidator } from "../../common/validator/common";
import { ReviewController } from "./review.controller";
import { ReviewValidator } from "./schemas/reviewValidator";

const routerUser = Router();

export class ReviewRouter {
  static router = Router();
  static controller = ReviewController;
  static getRoutes() {
    ReviewRouter.router.get("/", ReviewRouter.controller.getReviews);
    ReviewRouter.router.post(
      "/",
      ReviewValidator.createReview,
      CommonValidator.owner,
      ReviewRouter.controller.createReview
    );
    return ReviewRouter.router;
  }
}

export default routerUser;
