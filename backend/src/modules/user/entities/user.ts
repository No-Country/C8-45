import { Column, Entity } from "typeorm";

import { BaseModel } from "../../../common/baseModel";

@Entity()
export class User extends BaseModel {
  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  isActive!: boolean;
}
