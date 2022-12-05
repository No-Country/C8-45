import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export class CompanyValidator {
  static async emptyCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const arr = [
        "name",
        "avatar",
        "description",
        "address",
        "phone",
        "country",
        "city",
        "password",
      ];
      if (!(Object.keys(req.body).length === 0)) {
        const body = Object.keys(req.body);
        let qt = 0;
        for (let index = 0; index < body.length; index++) {
          const element = body[index];
          if (arr.find((x) => x == element)) {
            qt = qt + 1;
          }
        }
        const nBody = req.body;
        req.body = {
          name: nBody.name,
          avatar: nBody.avatar,
          description: nBody.description,
          address: nBody.address,
          phone: nBody.phone,
          country: nBody.country,
          city: nBody.city,
          password: nBody.password,
        };
        return qt > 0
          ? next()
          : res
              .status(400)
              .send("debe tener al menos una caracteristica que actualizar");
      }
      return res
        .status(400)
        .send("debe tener al menos una caracteristica que actualizar");
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }

  static async fieldsCompany(req: Request, res: Response, next: NextFunction) {
    const arr = [
      "name",
      "avatar",
      "description",
      "address",
      "phone",
      "country",
      "city",
      "password",
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
        ? next()
        : res
            .status(400)
            .send("debe tener al menos una caracteristica que actualizar");
    } catch (error) {
      const err = error as yup.ValidationError;
      res.status(400).json({ [err.name]: [...err.errors] });
    }
  }
}
