import { z } from "zod";

const UserProfileSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

const Users = z.array(UserProfileSchema);

export const UserSchema = {
  UserProfileSchema,
  Users,
};
