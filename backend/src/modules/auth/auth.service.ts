import { Encryptor } from "../../common/encriptor/encriptor";
import { ErrorService } from "../../common/error/errorModel";
import { Jwt } from "../../common/jwt/jwt";
import { userService } from "../user/user.service";

userService;
export class AuthService {
  userService = new userService();
  async login(email: string, passwordRequest: string) {
    const entity = await this.userService.findOneByEmail(email);
    if (!entity) throw new ErrorService(404, "Usuario no encontrado");
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
    return Jwt.encoder(data);
  }
}
