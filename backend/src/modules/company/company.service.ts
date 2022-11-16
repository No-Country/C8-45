import { Repository } from "typeorm";

import { RepositoryDB } from "../../common/repository";
import AppDataSource from "../../database/datasource";
import { Company } from "./entities/company";

export class CompanyService extends RepositoryDB<Company> {
  getRepository(): Repository<Company> {
    return AppDataSource.getRepository(Company);
  }
}
