import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { Uuid } from "../../../common/baseModel";
import { Review } from "../../review/entities/review";
import { Role } from "../../role/entities/role";

@Entity({ name: "companies" })
export class Company extends Uuid {
  @Column({ nullable: false, type: "varchar", unique: true })
  email!: string;
  @Column({ nullable: false, type: "varchar" })
  name!: string;
  @Column({ nullable: true, type: "varchar" })
  avatar?: string;
  @Column({ nullable: true, type: "varchar" })
  description?: string;
  @Column({ nullable: false, type: "float" })
  reviewsQuantity!: number;
  @Column({ nullable: true, type: "varchar" })
  address?: string;
  @Column({ nullable: true, type: "varchar" })
  phone?: string;
  @Column({ default: false, nullable: false, type: "boolean" })
  banned!: boolean;
  @Column({ nullable: true, type: "varchar" })
  country?: string;
  @Column({ nullable: true, type: "varchar" })
  city?: string;
  @Column({ nullable: false, type: "varchar" })
  website!: string;
  @Column({ nullable: false, type: "varchar" })
  workEmail!: string;
  @Column({ nullable: false, type: "float" })
  ratingGeneral!: number;
  @ManyToOne(() => Role, (role) => role.user, {
    nullable: false,
  })
  role!: Role | number;
  @OneToMany(() => Review, (review) => review.user)
  review!: Review[];
}
