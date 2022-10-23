import { IUser } from './user.model';

export interface IPost {
  _id: string;
  category: string;
  description: string;
  photo: string;
  title: string;
  user: IUser;
}

export interface IPostMenu {
  postId: string;
  postCategory: string;
  postImage: string;
  postTitle: string;
  postDescription?: string;
}
