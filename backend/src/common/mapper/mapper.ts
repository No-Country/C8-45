export class Mapper {
  static getToken(token: string): string {
    return token.split(" ")[1];
  }
}
