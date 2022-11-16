import * as bcrypt from "bcrypt";

export class Encryptor {
  static instance = bcrypt;
  static saltRounds = 10;

  static async hash(password: string) {
    return await Encryptor.instance.hash(password, this.saltRounds);
  }

  static async compare(password: string, hash: string) {
    return await Encryptor.instance.compare(password, hash);
  }
}
