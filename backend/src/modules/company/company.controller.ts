import { Request, Response } from "express";
import { Encryptor } from "../../common/encriptor/encriptor";
import { ErrorService } from "../../common/error/errorModel";

import { CompanyService } from "./company.service";

export class CompanyController {
  static service = new CompanyService();
  static async getMyCompany(req: Request, res: Response) {
    const entity = await CompanyController.service.findOneById(req.body.user.id);
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
  static async updateCompany (req:Request,res:Response){
    try {
      await CompanyController.service.updateById({...req.body,password:await Encryptor.hash(req.body.password)},req.body.user.id)
      res.status(200).json("company update")
    } catch (error) {
      if(error instanceof ErrorService){
      res.status(error.status).send(error.message)      
      }
    }
  }
  static async updateCompanyAdmin (req:Request,res:Response){
    try {
      const {id}=req.params
      delete req.body.user
      await CompanyController.service.updateById({...req.body,password:await Encryptor.hash(req.body.password)},id)
      res.status(200).json("company update")
    } catch (error) {
      if(error instanceof ErrorService){
      res.status(error.status).send(error.message)      
      }
    }
  }
  static async deleteCompanyAdmin (req:Request,res:Response){
    try {
      const {id}=req.params
      delete req.body.user
      await CompanyController.service.deleteById(id)
      res.status(200).json("company deleted")
    } catch (error) {
      if(error instanceof ErrorService){
      res.status(error.status).send(error.message)      
      }
    }
  }
  static async deleteCompany (req:Request,res:Response){
    try {
      await CompanyController.service.deleteById(req.body.user.id)
      res.status(200).json("company deleted")
    } catch (error) {
      if(error instanceof ErrorService){
      res.status(error.status).send(error.message)      
      }
    }
  }
}
