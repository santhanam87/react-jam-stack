import { User } from "./user-type";

export const GetUserKeys = {
  getUsers: (requestBody: User.UserProfile) => {
    return [
      {
        requestBody,
      },
    ];
  },
};
