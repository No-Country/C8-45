import { Request } from "express";

import { Company } from "../../modules/company/entities/company";
import { Role } from "../../modules/role/entities/role";
import { User } from "../../modules/user/entities/user";
import { ErrorService } from "../error/errorModel";
import { Jwt } from "../jwt/jwt";
import { Mapper } from "../mapper/mapper";

export type userG = User & Company;
export interface verifyToken {
  id: string;
  email: string;
  role: Role;
}
export class Token {
  static hasToken(req: Request) {
    const token = req.headers["authorization"];
    if (!token) {
      throw new ErrorService(401, "token is required");
    }
    const formatToken = Mapper.getToken(token as string);
    return formatToken;
  }

  static verifyToken(req: Request): verifyToken {
    try {
      const token = Token.hasToken(req);
      const { email, id, role } = Jwt.verify(token) as userG;
      const data: verifyToken = {
        email,
        id,
        role: role as Role,
      };
      return data;
    } catch (error) {
      throw error;
    }
  }
}
