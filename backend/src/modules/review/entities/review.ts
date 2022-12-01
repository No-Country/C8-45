import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";

import { Uuid } from "../../../common/baseModel";
import { Company } from "../../company/entities/company";
import { User } from "../../user/entities/user";

@Entity({ name: "reviews" })
export class Review extends Uuid {
  @Column({ nullable: true, type: "varchar" })
  description?: string;
  @Column({ nullable: false, type: "numeric" })
  rating!: number;
  @Column({ nullable: true, type: "varchar" })
  title?: string;
  @ManyToOne(() => User, (user) => user.review, { onDelete: "CASCADE" })
  user!: User;
  @ManyToOne(() => Company, (company) => company.review, {
    onDelete: "CASCADE",
  })
  company!: Company;
  @CreateDateColumn()
  createdAt?: Date;
}
