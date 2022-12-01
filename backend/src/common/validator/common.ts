import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

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
  static isCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const info = Token.verifyToken(req);
      if (!(info.role.id === 3)) {
        return res.status(400).send("acceso solo a compañias");
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
  static isUser(req: Request, res: Response, next: NextFunction) {
    try {
      const info = Token.verifyToken(req);
      if (!(info.role.id === 1)) {
        return res.status(400).send("acceso solo a usuarios");
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
  static async uuidValidator(req: Request, res: Response, next: NextFunction) {
    const schema = yup.object().shape({
      id: yup.string().required().uuid(),
    });
    try {
      await schema.validate(req.params);
      next();
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
}
