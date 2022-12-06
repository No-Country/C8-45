import { Encryptor } from "../../common/encriptor/encriptor";
import { ErrorService } from "../../common/error/errorModel";
import { Jwt } from "../../common/jwt/jwt";
import { CompanyService } from "../company/company.service";
import { User } from "../user/entities/user";
import { userService } from "../user/user.service";

userService;
export class AuthService {
  userService = new userService();
  companyService = new CompanyService();

  async login(email: string, passwordRequest: string) {
    
    try {
      const entity = await this.userService.findOneByEmail(email);
    if (!entity) throw new ErrorService(404, "Usuario no encontrado");
    let validate: boolean;
      validate = await Encryptor.compare(
        passwordRequest,
        entity.password as string
      );
      if (!validate) {
        throw new ErrorService(401, "Credenciales inválidas");
      }
      const { password, ...data } = entity;
      password?.at(4);
      return { ...Jwt.encoder(data), user: { ...data } };
    } catch (error) {
      console.log(error);
      
      throw new ErrorService(500, "error en el servidor");
    }
    
  }
  async loginCompany(email: string, passwordRequest: string) {
    const entity = await this.companyService.findOneByEmail(email);
    if (!entity) throw new ErrorService(404, "Compañia no encontrado");
    let validate: boolean;
    try {
      validate = await Encryptor.compare(
        passwordRequest,
        entity.password as string
      );
    } catch (error) {
      throw new ErrorService(500, "En el servidor");
    }
    if (!validate) {
      throw new ErrorService(401, "Credenciales inválidas");
    }
    const { password, ...data } = entity;
    return { ...Jwt.encoder(data), company: { ...data } };
  }
  async register(data: User) {
    try {
      const Password = await Encryptor.hash(data.password as string);
      const entity = await this.userService.create({
        ...data,
        password: Password,
        role: 1,
        banned: false,
        reviewsQuantity: 0,
      });
      delete entity.password;
      return entity;
    } catch (error) {
      throw error;
    }
  }
}
