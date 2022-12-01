import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { ValidationError } from "yup";

export class AuthValidator {
  static async login(req: Request, res: Response, next: NextFunction) {
    const schema = yup.object().shape({
      password: yup.string().required(),
      email: yup.string().email().required(),
    });
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      const err = error as ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
  static async register(req: Request, res: Response, next: NextFunction) {
    const schema = yup.object().shape({
      email: yup.string().required().email(),
      name: yup.string().required(),
      avatar: yup.string().optional(),
      lastName: yup.string().required(),
      reviewsQuantity: yup.string().notRequired(),
      address: yup.string().optional(),
      password: yup.string().required().min(4).max(15),
      phone: yup.string().optional(),
      banned: yup.string().notRequired(),
      country: yup.string().optional(),
      city: yup.string().optional(),
    });
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      const err = error as ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
  static async registerCompany(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const schema = yup.object().shape({
      email: yup.string().required().email(),
      name: yup.string().required(),
      description: yup.string().required(),
      address: yup.string().optional(),
      password: yup.string().required().min(4).max(15),
      phone: yup.string().optional(),
      country: yup.string().optional(),
      city: yup.string().optional(),
      website: yup.string().url().required(),
      workEmail: yup.string().email().required(),
    });
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      const err = error as ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
}
