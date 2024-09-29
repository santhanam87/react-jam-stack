import { Zodios, makeApi } from "@zodios/core";
import { getUsers } from "./user/user-endpoint";
const api = makeApi([getUsers]);
export const ApiClient = new Zodios("http://localhost:3000/api/", api);
