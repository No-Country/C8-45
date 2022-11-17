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
    const admin = new User();
    admin.email = "admin@gmail.com";
    admin.name = "admin";
    admin.password = await Encryptor.hash("admin123");
    admin.lastName = "lastname admin";
    admin.banned = false;
    admin.reviewsQuantity = 0;
    admin.role = 2;
    const user = new User();
    user.email = "usuario@gmail.com";
    user.name = "usuario de prueba";
    user.password = await Encryptor.hash("admin123");
    user.lastName = "lastname prueba";
    user.banned = false;
    user.reviewsQuantity = 0;
    user.role = 1;
    await userRepository.insert([user, admin]);
    const userFactory = await factoryManager.get(User);
    await userFactory.saveMany(10);
  }
}
