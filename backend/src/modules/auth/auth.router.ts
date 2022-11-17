import { Router } from "express";

import { AuthController } from "./auth.controller";
import { AuthValidator } from "./schemas/login";

const routerCompany = Router();

export class AuthRouter {
  static router = Router();
  static controller = AuthController;
  static getRoutes() {
    AuthRouter.router.post(
      "/login",
      AuthValidator.login,
      AuthRouter.controller.login
    );
    AuthRouter.router.post(
      "/register",
      AuthValidator.register,
      AuthRouter.controller.register
    );

    return AuthRouter.router;
  }
}

export default routerCompany;
