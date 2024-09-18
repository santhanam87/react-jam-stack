import { Zodios, makeApi } from "@zodios/core";

const api = makeApi([]);
export const ApiClient = new Zodios("/api/", api);
