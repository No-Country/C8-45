import { IsNumber, isUUID, IsUUID } from "class-validator";
import { Column, Generated, PrimaryGeneratedColumn } from "typeorm";

export class Uuid {
  @IsUUID()
  @PrimaryGeneratedColumn("uuid")
  id!: string;
}

export class NumberId {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id!: number;
}
