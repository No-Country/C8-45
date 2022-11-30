import { Request, Response } from "express";
import { Encryptor } from "../../common/encriptor/encriptor";
import { ErrorService } from "../../common/error/errorModel";

import { CompanyService } from "./company.service";

export class CompanyController {
  static service = new CompanyService();
  static async getCompanies(req: Request, res: Response) {
    const entity = await CompanyController.service.findAll();
    res.send(entity);
    return;
  }

  static async createCompany (req:Request,res:Response){
    try {
      const entity=await CompanyController.service.create({...req.body,reviewsQuantity:0,role:3,password:await Encryptor.hash(req.body.password),ratingGeneral:0})
      const {password,...data}=entity
      res.status(200).json(data)
    } catch (error) {
      if(error instanceof ErrorService){
      res.status(error.status).send(error.message)      
      }
    }
  }
}
