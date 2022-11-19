import { setSeederFactory } from "typeorm-extension";

import { Review } from "../../modules/review/entities/review";

export default setSeederFactory(Review, (faker) => {
  const entity = new Review();
  entity.createdAt = faker.date.past();
  entity.description = faker.lorem.sentences(2);
  entity.rating = Math.floor(Math.random() * 4.9);
  entity.title = faker.lorem.sentence(3);
  return entity;
});
