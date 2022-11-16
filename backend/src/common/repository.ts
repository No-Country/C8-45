import { Repository } from "typeorm";

import { NumberId, Uuid } from "./baseModel";

export abstract class RepositoryDB<T extends Uuid | NumberId> {
  abstract getRepository(): Repository<T>;
  async findAll(): Promise<T[]> {
    try {
      return await this.getRepository().find({
        loadEagerRelations: true,
      });
    } catch (error) {
      console.log(error);

      throw new Error("error Database");
    }
  }
  async findOne(id: string): Promise<T | null> {
    try {
      return await this.getRepository().findOne({ [id as keyof T]: id });
    } catch (error) {
      throw new Error("error Database");
    }
  }
  async create(entity: T): Promise<T> {
    try {
      return await this.getRepository().save(entity);
    } catch (error) {
      throw new Error("error Database");
    }
  }
  async delete(id: number) {
    try {
      return await this.getRepository().delete(id);
    } catch (error) {
      throw new Error("error Database");
    }
  }
}
