import { Router } from "express";

import { CompanyController } from "./company.controller";

const routerCompany = Router();

export class CompanyRouter {
  static router = Router();
  static controller = CompanyController;
  static getRoutes() {
    CompanyRouter.router.get("/", CompanyRouter.controller.getCompanies);
    return CompanyRouter.router;
  }
}

export default routerCompany;
