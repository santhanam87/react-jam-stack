import { User } from "./user-type";

export const GetUserKeys = {
  getUsers: (requestBody: Partial<User.UserProfile>) => {
    return [
      {
        requestBody,
      },
    ];
  },
};
