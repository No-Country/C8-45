import * as jwt from "jsonwebtoken";

import { Logger } from "../../utils/logger";
import { ErrorService } from "../error/errorModel";

export class Jwt {
  static secret = process.env.SECRETORPRIVATEKEY as string;
  static expiration = "3d";
  static encoder<T>(data: Partial<T>) {
    try {
      const token = jwt.sign(data, Jwt.secret, {
        expiresIn: Jwt.expiration,
      });
      return { token };
    } catch (error) {
      Logger.error((error as string) + "ENCODERS");
      throw new ErrorService(409, "error en el token");
    }
  }
  static verify(token: string) {
    try {
      return jwt.verify(token, Jwt.secret);
    } catch (error) {
      Logger.error((error as string) + "VERIFY");
      throw new ErrorService(406, "error en el token");
    }
  }
  static decode(token: string) {
    try {
      return jwt.decode(token, { json: true });
    } catch (error) {
      throw new ErrorService(406, "error en el token");
    }
  }
}
