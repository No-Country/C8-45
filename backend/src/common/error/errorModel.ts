import { Logger } from "../../utils/logger";

export class ErrorService {
  constructor(public status: number = 500, public message: string) {
    if (status >= 500) {
      Logger.error(message);
    }
  }
}

export class ErrorJwt {
  public status = 500;
  constructor(public message: string) {
    Logger.error(message);
  }
}
