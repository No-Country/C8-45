import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export class ReviewValidator {
  static async createReview(req: Request, res: Response, next: NextFunction) {
    const schema = yup.object().shape({
      description: yup.string().notRequired(),
      rating: yup.number().required(),
      title: yup.string().notRequired(),
      company: yup.string().required().uuid(),
    });
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
  static async createReviewGeneral(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const schema = yup.object().shape({
      description: yup.string().notRequired(),
      rating: yup.number().required(),
      title: yup.string().notRequired(),
      companyName: yup.string().required(),
      companyUrl: yup.string().required().url(),
    });
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
  static async updateReview(req: Request, res: Response, next: NextFunction) {
    const schema = yup.object().shape({
      description: yup.string().notRequired(),
      rating: yup.number().required(),
      title: yup.string().notRequired(),
    });
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
}
