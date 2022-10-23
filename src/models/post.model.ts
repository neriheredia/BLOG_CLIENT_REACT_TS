import { IUser } from './user.model';

export interface IPost {
  _id: string;
  category: string;
  description: string;
  photo: string;
  title: string;
  user: IUser;
}
