import { setSeederFactory } from "typeorm-extension";

import { Encryptor } from "../../common/encriptor/encriptor";
import { User } from "../../modules/user/entities/user";

export default setSeederFactory(User, async (faker) => {
  const user = new User();
  user.email = faker.internet.email();
  user.name =
    faker.name.firstName("female") + " " + faker.name.firstName("female");
  user.lastName =
    faker.name.lastName("male") + " " + faker.name.lastName("female");
  user.banned = false;
  user.avatar = faker.internet.avatar();
  user.reviewsQuantity = 0;
  user.password = await Encryptor.hash("user123");
  user.address = faker.address.streetAddress();
  user.phone = faker.phone.number();
  user.country = faker.address.country();
  user.city = faker.address.cityName();
  user.role = 1;
  return user;
});
