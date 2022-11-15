import { Column, Entity } from "typeorm";

import { NumberId } from "../../../common/baseModel";

@Entity({ name: "roles" })
export class Role extends NumberId {
  @Column({ nullable: false, type: "varchar" })
  name!: string;
}
