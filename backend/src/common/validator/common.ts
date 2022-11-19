import { NextFunction, Request, Response } from "express";

import { ErrorService } from "../error/errorModel";
import { Token } from "./token";

export class CommonValidator {
  static owner(req: Request, res: Response, next: NextFunction) {
    try {
      const info = Token.verifyToken(req);
      req.body.user = info;
      next();
      return;
    } catch (error) {
      const errI = error as ErrorService;
      res.status(errI.status).send(errI.message);
      return;
    }
  }
  static isAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      const info = Token.verifyToken(req);
      if (!(info.role.id === 2)) {
        return res.status(400).send("acceso solo a administradores");
      }
      req.body.user = info;
      next();
      return;
    } catch (error) {
      if (error instanceof ErrorService) {
        const errI = error as ErrorService;
        return res.status(errI.status).send(errI.message);
      }
      return res.status(400).send(error);
    }
  }
}
