import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

import { User } from "../../modules/user/entities/user";

export default class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userFactory = await factoryManager.get(User);
    // save 5 factory generated entities, to the database
    await userFactory.saveMany(25);
  }
}
