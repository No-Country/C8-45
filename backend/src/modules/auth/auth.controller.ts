import { Request, Response } from "express";
import { ErrorBase } from "../../common/error/errorBase";
import { ErrorService } from "../../common/error/errorModel";
import { userService } from "../user/user.service";
import { AuthService } from "./auth.service";

export class AuthController {
  static AuthService = new AuthService();
  static async login(req: Request, res: Response) {
    const body = req.body;
    try {
      const entity = await AuthController.AuthService.login(
        req.body.email!,
        req.body.password!
      );
      res.status(200).json(entity);
    } catch (error) {
      let errorI = new ErrorBase(error);
      res.status(errorI.status).send(errorI.message);
    }
  }
}
