import { Router } from "express";

import { CommonValidator } from "../../common/validator/common";
import { CompanyController } from "./company.controller";
import { CompanyValidator } from "./schemas/companyValidator";

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
    CompanyRouter.router.get("/:id",CommonValidator.uuidValidator ,CompanyRouter.controller.getMyCompanyId);
    CompanyRouter.router.put(
      "/",
      CompanyValidator.emptyCompany,
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
      CommonValidator.uuidValidator,
      CompanyRouter.controller.deleteCompanyAdmin
    );
    CompanyRouter.router.put(
      "/admin/:id",
      CommonValidator.isAdmin,
      CommonValidator.uuidValidator,
      CompanyRouter.controller.updateCompanyAdmin
    );
    return CompanyRouter.router;
  }
}

export default routerCompany;
