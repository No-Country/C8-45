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
    ReviewRouter.router.get("/me",
    CommonValidator.owner,ReviewRouter.controller.getMeReviews);
    ReviewRouter.router.post(
      "/",
      ReviewValidator.createReview,
      CommonValidator.owner,
      ReviewRouter.controller.createReview
    );
    ReviewRouter.router.put(
      "/:id",
      CommonValidator.uuidValidator,
      ReviewValidator.updateReview,
      CommonValidator.owner,
      ReviewRouter.controller.updateReview
    );
    return ReviewRouter.router;
  }
}

export default routerUser;
