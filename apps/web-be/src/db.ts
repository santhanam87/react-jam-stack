import { MikroORM, EntityManager, EntityRepository } from "@mikro-orm/core";
import { Options } from "@mikro-orm/postgresql";
import { User } from "./entity/user.entity";
import config from "./db-config";

export interface Services {
  orm: MikroORM;
  em: EntityManager;
  user: EntityRepository<User>;
}

let cache: Services;

export async function initORM(options?: Options): Promise<Services> {
  if (cache) {
    return cache;
  }

  // allow overriding config options for testing
  const orm = await MikroORM.init({
    ...config,
    ...options,
  });

  // save to cache before returning
  return (cache = {
    orm,
    em: orm.em,
    user: orm.em.getRepository(User),
  });
}
