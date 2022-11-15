import { DataSource } from "typeorm";
import { Seeder } from "typeorm-extension";

import { Role } from "../../modules/role/entities/role";

export default class RoleSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    const roleRepository = dataSource.getRepository(Role);
    const user = new Role();
    user.name = "user";
    const admin = new Role();
    admin.name = "admin";
    const company = new Role();
    company.name = "company";
    await roleRepository.insert([user, admin, company]);
  }
}
