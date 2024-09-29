import { makeEndpoint } from "@zodios/core";
import { UserSchema } from "./user-schema";

export const getUsers = makeEndpoint({
  method: "post",
  path: "user/search",
  alias: "getUsers",
  parameters: [
    {
      type: "Body",
      name: "getUsersPayload",
      schema: UserSchema.UserProfileSchema.partial(),
    },
  ],
  response: UserSchema.Users,
});
