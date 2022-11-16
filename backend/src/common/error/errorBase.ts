import { ErrorService } from "./errorModel";

export class ErrorBase {
  status: number = 500;
  message: string = "error en el servidor";
  constructor(error: unknown) {
    if (error instanceof ErrorService) {
      this.message = error.message;
      this.status = error.status;
      return;
    }
  }
}
