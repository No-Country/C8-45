import { Router } from "express";

import { CommonValidator } from "../../common/validator/common";
import { ReviewController } from "./review.controller";
import { ReviewValidator } from "./schemas/reviewValidator";

const routerUser = Router();

export class ReviewRouter {
  static router = Router();
  static controller = ReviewController;
  static getRoutes() {
    ReviewRouter.router.get(
      "/",
      CommonValidator.isAdmin,
      ReviewRouter.controller.getReviews
    );
    ReviewRouter.router.get(
      "/user",
      CommonValidator.isUser,
      ReviewRouter.controller.getMeReviews
    );
    ReviewRouter.router.get(
      "/company",
      CommonValidator.isCompany,
      ReviewRouter.controller.getMeReviewsCompany
    );
    ReviewRouter.router.post(
      "/",
      ReviewValidator.createReview,
      CommonValidator.owner,
      ReviewRouter.controller.createReview
    );
    ReviewRouter.router.post(
      "/companyOrUser",
      ReviewValidator.createReviewGeneral,
      CommonValidator.owner,
      ReviewRouter.controller.createReviewGeneral
    );
    ReviewRouter.router.put(
      "/:id",
      CommonValidator.uuidValidator,
      ReviewValidator.updateReview,
      CommonValidator.owner,
      ReviewRouter.controller.updateReview
    );
    ReviewRouter.router.delete(
      "/:id",
      CommonValidator.uuidValidator,
      CommonValidator.owner,
      ReviewRouter.controller.deleteReview
    );
    return ReviewRouter.router;
  }
}

export default routerUser;
