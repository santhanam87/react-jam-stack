import { Options, defineConfig } from "@mikro-orm/postgresql";

const options = {} as Options;

export default defineConfig({
  // for simplicity, we use the SQLite database, as it's available pretty much everywhere
  dbName: "toy-shop",
  password: "postgress",
  user: "postgres",
  host: "localhost",
  port: 5432,
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  debug: true,
  dynamicImportProvider: (id) => import(id),
  ...options,
});
