import { Request, Response } from "express";

import { userService } from "./user.service";

export class UserController {
  static userService = new userService();
  static async getUser(req: Request, res: Response) {
    const user = await UserController.userService.findAll();
    res.send(user);
    return;
  }
}
