import { Router } from "express";

import { CommonValidator } from "../../common/validator/common";
import { UserController } from "./user.controller";

const routerUser = Router();

routerUser.get("/", UserController.getUser);

export class UserRouter {
  static router = Router();
  static controller = UserController;
  static getRoutes() {
    UserRouter.router.get(
      "/",
      CommonValidator.isAdmin,
      UserRouter.controller.getUser
    );
    UserRouter.router.get(
      "/me",
      CommonValidator.owner,
      UserRouter.controller.ownData
    );
    UserRouter.router.get(
      "/admin",
      CommonValidator.isAdmin,
      UserRouter.controller.ownData
    );
    return UserRouter.router;
  }
}

export default routerUser;
