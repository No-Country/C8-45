import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

import { Review } from "../../modules/review/entities/review";

export default class ReviewSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const entityFactory = await factoryManager.get(Review);
    await entityFactory.saveMany(10);
  }
}
