import { setSeederFactory } from "typeorm-extension";
import { User } from "../../modules/user/entities/user";
export default setSeederFactory(User, (faker) => {
  const user = new User();
  user.firstName = faker.name.firstName("male");
  user.lastName =
    faker.name.lastName("male") + " " + faker.name.lastName("female");
  user.isActive = true;

  return user;
});
