import { Request, Response } from "express";

import { userService } from "./user.service";

export class UserController {
  static userService = new userService();
  static async getUser(req: Request, res: Response) {
    const user = await UserController.userService.findAll();
    res.send(user);
    return;
  }
  static async ownData(req: Request, res: Response) {
    const { email } = req.body.user;
    const profile = await UserController.userService.findOneByEmail(email);
    delete profile?.password;
    res.send(profile);
    return;
  }
}
