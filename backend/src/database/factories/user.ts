import { setSeederFactory } from "typeorm-extension";

import { User } from "../../modules/user/entities/user";

export default setSeederFactory(User, (faker) => {
  const user = new User();
  user.email = faker.internet.email();
  user.name =
    faker.name.firstName("female") + " " + faker.name.firstName("female");
  user.lastName =
    faker.name.lastName("male") + " " + faker.name.lastName("female");
  user.banned = false;
  user.avatar = faker.internet.avatar();
  user.reviewsQuantity = 0;
  user.address = faker.address.streetAddress();
  user.phone = faker.phone.number();
  user.country = faker.address.country();
  user.city = faker.address.cityName();

  return user;
});
