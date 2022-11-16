import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

import { Encryptor } from "../../common/encriptor/encriptor";
import { User } from "../../modules/user/entities/user";

export default class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    const user = new User();
    user.email = "admin@gmail.com";
    user.name = "admin";
    user.password = await Encryptor.hash("admin123");
    user.lastName = "lastname admin";
    user.banned = false;
    user.reviewsQuantity = 0;
    user.role = 2;
    await userRepository.insert([user]);
    const userFactory = await factoryManager.get(User);
    await userFactory.saveMany(10);
  }
}
