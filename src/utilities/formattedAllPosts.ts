import { IPost } from '@/models';
import { postsAdapter } from '@/adapters';

export const formattedAllPosts = (arr: IPost[]) => {
  const response = arr.map((item) => postsAdapter(item));
  return response;
};
