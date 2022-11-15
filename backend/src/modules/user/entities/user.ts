import { Column, Entity } from "typeorm";

import { Uuid } from "../../../common/baseModel";

@Entity({ name: "users" })
export class User extends Uuid {
  @Column({ nullable: false, type: "varchar", unique: true })
  email!: string;
  @Column({ nullable: false, type: "varchar" })
  name!: string;
  @Column({ nullable: true, type: "varchar" })
  avatar?: string;
  @Column({ nullable: false, type: "varchar" })
  lastName!: string;
  @Column({ nullable: false, type: "float" })
  reviewsQuantity!: number;
  @Column({ nullable: true, type: "varchar" })
  address?: string;
  @Column({ nullable: true, type: "varchar" })
  phone?: string;
  @Column({ default: false, nullable: false, type: "boolean" })
  banned!: boolean;
}
