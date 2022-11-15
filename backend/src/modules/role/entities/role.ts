import { Column, Entity, OneToMany } from "typeorm";

import { NumberId } from "../../../common/baseModel";
import { User } from "../../user/entities/user";

@Entity({ name: "roles" })
export class Role extends NumberId {
  @Column({ nullable: false, type: "varchar" })
  name!: string;
  @OneToMany(() => User, (user) => user.role)
  user!: User[];
}
