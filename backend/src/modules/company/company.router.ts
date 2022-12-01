import { Router } from "express";

import { CommonValidator } from "../../common/validator/common";
import { CompanyController } from "./company.controller";

const routerCompany = Router();

export class CompanyRouter {
  static router = Router();
  static controller = CompanyController;
  static getRoutes() {
    CompanyRouter.router.get(
      "/",
      CommonValidator.isCompany,
      CompanyRouter.controller.getMyCompany
    );
    CompanyRouter.router.put(
      "/",
      CommonValidator.isCompany,
      CompanyRouter.controller.updateCompany
    );
    CompanyRouter.router.delete(
      "/",
      CommonValidator.isCompany,
      CompanyRouter.controller.deleteCompany
    );
    CompanyRouter.router.delete(
      "/admin/:id",
      CommonValidator.isAdmin,
      CompanyRouter.controller.deleteCompanyAdmin
    );
    CompanyRouter.router.put(
      "/admin/:id",
      CommonValidator.isAdmin,
      CompanyRouter.controller.updateCompanyAdmin
    );
    return CompanyRouter.router;
  }
}

export default routerCompany;
