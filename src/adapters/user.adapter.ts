import { IUser } from '@/models';

export const userAdapter = (response: IUser) => ({
  id: response._id,
  avatar: response.avatar,
  email: response.email,
  firstName: response.firstName,
  isAdmin: response.isAdmin,
  lastName: response.firstName,
  profile: response.profilePic,
});
