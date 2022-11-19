import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { Uuid } from "../../../common/baseModel";
import { Review } from "../../review/entities/review";
import { Role } from "../../role/entities/role";

@Entity({ name: "users" })
export class User extends Uuid {
  @Column({ nullable: false, type: "varchar", unique: true })
  email!: string;
  @Column({ nullable: false, type: "varchar" })
  name!: string;
  @Column({ nullable: true, type: "varchar" })
  avatar?: string;
  @Column({ nullable: true, type: "varchar" })
  lastName?: string;
  @Column({ nullable: false, type: "float" })
  reviewsQuantity!: number;
  @Column({ nullable: true, type: "varchar" })
  address?: string;
  @Column({ nullable: false, type: "varchar" })
  password?: string;
  @Column({ nullable: true, type: "varchar" })
  phone?: string;
  @Column({ default: false, nullable: false, type: "boolean" })
  banned!: boolean;
  @Column({ nullable: true, type: "varchar" })
  country?: string;
  @Column({ nullable: true, type: "varchar" })
  city?: string;
  @ManyToOne(() => Role, (role) => role.user, { nullable: false, eager: true })
  role!: Role | number;
  @OneToMany(() => Review, (review) => review.user, {})
  review!: Review[];
}
