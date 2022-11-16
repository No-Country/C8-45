import { Router } from "express";

import { AuthController } from "./auth.controller";

const routerCompany = Router();

export class AuthRouter {
  static router = Router();
  static controller = AuthController;
  static getRoutes() {
    AuthRouter.router.post("/login", AuthRouter.controller.login);
    return AuthRouter.router;
  }
}

export default routerCompany;
