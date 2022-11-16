import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { CompanyService } from "../../modules/company/company.service";
import { Company } from "../../modules/company/entities/company";
import { Review } from "../../modules/review/entities/review";
import { User } from "../../modules/user/entities/user";
import { userService } from "../../modules/user/user.service";

export default class ReviewSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const user = new userService();
    const company = new CompanyService();
    const users = await user.findAll();
    const companies = await company.findAll();
    const entityFactory = await factoryManager.get(Review);
    await entityFactory.saveMany(10);
  }
}
