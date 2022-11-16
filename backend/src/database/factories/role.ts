import { setSeederFactory } from "typeorm-extension";

import { Role } from "../../modules/role/entities/role";

Role;
export default setSeederFactory(Role, (faker) => {
  const entity = new Role();
  entity.name =
    faker.name.firstName("female") + " " + faker.name.firstName("female");
  return entity;
});
