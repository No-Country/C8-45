import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { Company } from "./entities/company";

export class CompanyService extends RepositoryDB<Company> {
  getRepository(): Repository<Company> {
    return AppDataSource.getRepository(Company);
  }
  async findOneById(id: string) {
    return await this.getRepository().findOneBy({
      id: id,
    });
  }
  async findOne(id: string) {
    return await this.getRepository().findOne({
      where: {
        id,
      },
      relations:{
        review:true
      }
    });
  }
  async findOneByHostname(host: string) {
    return await this.getRepository().findOneBy({
      website: host,
    });
  }
  async findOneByEmail(email: string) {
    return await this.getRepository().findOneBy({
      email,
    });
  }
  async updateById(data: Partial<Company>, id: string) {
    return await this.getRepository().update(id, data);
  }
  async deleteById(id: string) {
    this.getRepository().delete(id);
  }
}
