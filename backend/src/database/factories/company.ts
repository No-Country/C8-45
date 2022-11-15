import { setSeederFactory } from "typeorm-extension";
import { Company } from "../../modules/company/entities/company";

export default setSeederFactory(Company, (faker) => {
  const entity = new Company();
  entity.email = faker.internet.email();
  entity.name = faker.company.bs();
  entity.description = faker.company.catchPhrase();
  entity.banned = false;
  entity.avatar = faker.internet.avatar();
  entity.reviewsQuantity = 0;
  entity.address = faker.address.streetAddress();
  entity.phone = faker.phone.number();
  entity.country = faker.address.country();
  entity.city = faker.address.cityName();
  entity.role = 3;
  entity.website = faker.internet.url();
  entity.workEmail = faker.internet.email(undefined, undefined, undefined, {
    allowSpecialCharacters: true,
  });
  entity.ratingGeneral = parseInt(faker.random.numeric(1)) * 0.54;

  return entity;
});
