import { Router } from "express";

import { UserController } from "./user.controller";

const routerUser = Router();

routerUser.get("/", UserController.getUser);

export class UserRouter {
  static router = Router();
  static controller = UserController;
  static getRoutes() {
    UserRouter.router.get("/", UserRouter.controller.getUser);
    return UserRouter.router;
  }
}

export default routerUser;
