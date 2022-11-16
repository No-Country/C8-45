import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

import { Company } from "../../modules/company/entities/company";

export default class CompanySeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const entityFactory = await factoryManager.get(Company);
    await entityFactory.saveMany(10);
  }
}
