import { Request, Response } from "express";

import { Algolia } from "../../common/algolia/algolia";
import { Encryptor } from "../../common/encriptor/encriptor";
import { ErrorService } from "../../common/error/errorModel";
import { CompanyService } from "./company.service";
import { Company } from "./entities/company";

export class CompanyController {
  static service = new CompanyService();
  static async getMyCompany(req: Request, res: Response) {
    const entity = await CompanyController.service.findOneById(
      req.body.user.id
    );
    res.send(entity);
    return;
  }

  static async getMyCompanyId(req: Request, res: Response) {
    const { id } = req.params;
    const entity = await CompanyController.service.findOne(id);
    const { ...data } = entity as Company;
    data.review = data.review.map((x) => {
      x.company.password = "";
      x.user.password = "";
      return x;
    });
    res.status(200).json(data);
    return;
  }

  static async createCompany(req: Request, res: Response) {
    try {
      const entity = await CompanyController.service.create({
        ...req.body,
        reviewsQuantity: 0,
        role: 3,
        password: await Encryptor.hash(req.body.password),
        ratingGeneral: 0,
      });
      const { password, ...data } = entity;
      await Algolia.createCompany(entity);
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof ErrorService) {
        res.status(error.status).send(error.message);
      }
    }
  }
  static async updateCompany(req: Request, res: Response) {
    try {
      const { id } = req.body.user;
      delete req.body.user;

      if (!req.body.password) {
        await CompanyController.service.updateById({ ...req.body }, id);
        await Algolia.updateCompany({ ...req.body, id });
        return res.status(200).json("company update");
      }
      await CompanyController.service.updateById(
        { ...req.body, password: await Encryptor.hash(req.body.password) },
        id
      );
      await Algolia.updateCompany({ ...req.body, id });
      res.status(200).json("company update");
    } catch (error) {
      if (error instanceof ErrorService) {
        res.status(error.status).send(error.message);
      }
      res.status(500).send("error en el servidor");
    }
  }
  static async updateCompanyAdmin(req: Request, res: Response) {
    try {
      const { id } = req.params;
      delete req.body.user;

      if (!req.body.password) {
        await CompanyController.service.updateById({ ...req.body }, id);
        await Algolia.updateCompany({ ...req.body, id });
        return res.status(200).json("company update");
      }
      await CompanyController.service.updateById(
        { ...req.body, password: await Encryptor.hash(req.body.password) },
        id
      );
      await Algolia.updateCompany({ ...req.body, id });
      res.status(200).json("company updated");
    } catch (error) {
      if (error instanceof ErrorService) {
        res.status(error.status).send(error.message);
      }
    }
  }
  static async deleteCompanyAdmin(req: Request, res: Response) {
    try {
      const { id } = req.params;
      delete req.body.user;
      await CompanyController.service.deleteById(id);
      await Algolia.deleteCompany({ ...req.body, id });
      res.status(200).json("company deleted");
    } catch (error) {
      if (error instanceof ErrorService) {
        res.status(error.status).send(error.message);
      }
    }
  }
  static async deleteCompany(req: Request, res: Response) {
    try {
      await CompanyController.service.deleteById(req.body.user.id);
      await Algolia.deleteCompany({ ...req.body, id: req.body.user.id });
      res.status(200).json("company deleted");
    } catch (error) {
      if (error instanceof ErrorService) {
        res.status(error.status).send(error.message);
      }
    }
  }
}
