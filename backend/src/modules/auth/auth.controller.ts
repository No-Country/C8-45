import { Request, Response } from "express";

import { ErrorBase } from "../../common/error/errorBase";
import { AuthService } from "./auth.service";

export class AuthController {
  static AuthService = new AuthService();
  static async login(req: Request, res: Response) {
    try {
      const entity = await AuthController.AuthService.login(
        req.body.email,
        req.body.password
      );
      res.status(200).json(entity);
    } catch (error) {
      const errorI = new ErrorBase(error);
      res.status(errorI.status).send(errorI.message);
    }
  }
  static async loginCompany(req: Request, res: Response) {
    try {
      const entity = await AuthController.AuthService.loginCompany(
        req.body.email,
        req.body.password
      );
      res.status(200).json(entity);
    } catch (error) {
      const errorI = new ErrorBase(error);
      res.status(errorI.status).send(errorI.message);
    }
  }
  static async register(req: Request, res: Response) {
    try {
      const entity = await AuthController.AuthService.register(req.body);
      res.status(200).send(entity);
    } catch (error) {
      const errorI = new ErrorBase(error);
      res.status(errorI.status).send(errorI.message);
    }
  }
}
