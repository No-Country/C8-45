import { Router } from "express";

import { UserRouter } from "../modules/user/user.router";

const router = Router();

router.use("/user", UserRouter.getRoutes());

export default router;
