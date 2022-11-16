import { Router } from "express";
import { CompanyRouter } from "../modules/company/company.router";
import { ReviewRouter } from "../modules/review/review.router";

import { UserRouter } from "../modules/user/user.router";

const router = Router();
router.use("/company", CompanyRouter.getRoutes());
router.use("/user", UserRouter.getRoutes());
router.use("/reviews", ReviewRouter.getRoutes());

export default router;
