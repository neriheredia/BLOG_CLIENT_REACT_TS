import { categoryAdapter } from '@/adapters';
import { ICategory } from '../models/category.model';

export const formattedAllCategories = (arr: ICategory[]) => {
  const response = arr.map((item) => categoryAdapter(item));
  return response;
};
