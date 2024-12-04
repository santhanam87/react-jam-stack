import fastify from "fastify";

import { initORM } from "./db";
import { RequestContext } from "@mikro-orm/core";

export async function Bootstrap(port = 3001) {
  const db = await initORM();
  const app = fastify();
  app.addHook("onRequest", (request, reply, done) => {
    RequestContext.create(db.em, done);
  });
  app.addHook("onClose", async () => {
    await db.orm.close();
  });
  const url = await app.listen({ port });
  return url;
}
