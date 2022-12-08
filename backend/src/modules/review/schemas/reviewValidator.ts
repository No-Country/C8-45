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
      experienceDate: yup.date().required(),
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
      rating: yup.number().notRequired(),
      title: yup.string().notRequired(),
      experienceDate:yup.date().notRequired(),
    });
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
  static async fieldsReview(req: Request, res: Response, next: NextFunction) {
    const arr = [
      "description",
      "rating",
      "title",
      "experienceDate",
      "city",
    ];
    let qt = 0;
    try {
      const body = Object.keys(req.body);
      for (let index = 0; index < body.length; index++) {
        const element = body[index];
        if (arr.find((x) => x == element)) {
          qt = qt + 1;
        }
      }
      return qt > 0
        ? (next())
        : res
            .status(400)
            .send("debe tener al menos una caracteristica que actualizar");
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
}
