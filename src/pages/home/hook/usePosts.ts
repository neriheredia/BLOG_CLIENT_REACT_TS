import { useState } from 'react';
import { useAsync, useFetchAndLoad } from '@/hook';
import { getPosts, getPostsCategories } from '@/services';
import { formattedAllPosts } from '@/utilities';

const usePosts = (category?: string) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [posts, setPosts] = useState<any>(null);

  const getApiData = async () => {
    if (category) {
      const response = await callEndpoint(getPostsCategories(category));
      return response;
    }
    const response = await callEndpoint(getPosts());
    return response;
  };

  const postAdapterPrint = (data: any) => {
    const formatted = formattedAllPosts(data.data.docs);
    setPosts(formatted);
  };

  useAsync(getApiData, postAdapterPrint, () => {}, [category]);

  return {
    loading,
    posts,
  };
};

export default usePosts;
