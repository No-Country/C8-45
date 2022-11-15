import { IsNumber, IsUUID } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class Uuid {
  @IsUUID()
  @PrimaryGeneratedColumn("uuid")
  id!: string;
}

export class NumberId {
  @IsNumber()
  @PrimaryGeneratedColumn("increment")
  id!: number;
}
