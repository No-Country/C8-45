import { Request, Response } from "express";

import { CompanyService } from "./company.service";

export class CompanyController {
  static service = new CompanyService();
  static async getCompanies(req: Request, res: Response) {
    const entity = await CompanyController.service.findAll();
    res.send(entity);
    return;
  }
}
