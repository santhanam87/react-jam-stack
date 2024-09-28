import { makeEndpoint } from "@zodios/core";
import { UserSchema } from "./user-schema";

export const getUsers = makeEndpoint({
  method: "post",
  path: "/users",
  alias: "getUsers",
  parameters: [
    {
      type: "Body",
      name: "getUsersPayload",
      schema: UserSchema.UserProfileSchema,
    },
  ],
  response: UserSchema.Users,
});
