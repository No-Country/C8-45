import { Router } from "express";

import { AuthRouter } from "../modules/auth/auth.router";
import { CompanyRouter } from "../modules/company/company.router";
import { ReviewRouter } from "../modules/review/review.router";
import { UserRouter } from "../modules/user/user.router";

const router = Router();
router.use("/auth", AuthRouter.getRoutes());
router.use("/company", CompanyRouter.getRoutes());
router.use("/user", UserRouter.getRoutes());
router.use("/review", ReviewRouter.getRoutes());

export default router;
