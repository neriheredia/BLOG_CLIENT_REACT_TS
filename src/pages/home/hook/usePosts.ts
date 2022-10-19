import { useState } from 'react';
import { useAsync, useFetchAndLoad } from '@/hook';
import { getPosts } from '@/services';
import { formattedAllPosts } from '@/utilities';

const usePosts = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [posts, setPosts] = useState<any>(null);

  const getApiData = async () => {
    const response = await callEndpoint(getPosts());
    return response;
  };

  const postAdapterPrint = (data: any) => {
    const formatted = formattedAllPosts(data.data.docs);
    setPosts(formatted);
  };

  useAsync(getApiData, postAdapterPrint, () => {});

  return {
    loading,
    posts,
  };
};

export default usePosts;
