import { QueryFailedError, Repository } from "typeorm";

import { NumberId, Uuid } from "./baseModel";
import { ErrorService } from "./error/errorModel";

export abstract class RepositoryDB<T extends Uuid | NumberId> {
  abstract getRepository(): Repository<T>;
  async findAll(): Promise<T[]> {
    try {
      return await this.getRepository().find({
        loadEagerRelations: true,
      });
    } catch (error) {
      throw new Error("error Database");
    }
  }

  async create(entity: T): Promise<T> {
    try {
      return await this.getRepository().save(entity);
    } catch (error) {
      console.log(error);

      if (error instanceof QueryFailedError) {
        if (error.driverError.errno === 1062) {
          throw new ErrorService(
            404,
            "Uno o más campos ya se encuentran registrados"
          );
        }
        throw new ErrorService(404, "Error en la solicitud");
      }
      throw new ErrorService(500, "error Database");
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
