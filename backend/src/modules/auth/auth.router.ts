import { Router } from "express";

import { CompanyController } from "../company/company.controller";
import { AuthController } from "./auth.controller";
import { AuthValidator } from "./schemas/authValidator";

const routerCompany = Router();

export class AuthRouter {
  static router = Router();
  static controller = AuthController;
  static controllerCompany = CompanyController;
  static getRoutes() {
    AuthRouter.router.post(
      "/login",
      AuthValidator.login,
      AuthRouter.controller.login
    );
    AuthRouter.router.post(
      "/loginCompany",
      AuthValidator.login,
      AuthRouter.controller.loginCompany
    );
    AuthRouter.router.post(
      "/register",
      AuthValidator.register,
      AuthRouter.controller.register
    );
    AuthRouter.router.post(
      "/registerCompany",
      AuthValidator.registerCompany,
      AuthRouter.controllerCompany.createCompany
    );
    return AuthRouter.router;
  }
}

export default routerCompany;
