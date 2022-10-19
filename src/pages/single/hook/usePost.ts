import { useState } from 'react';
import { postAdapter } from '@/adapters';
import { getPostById } from '@/services';
import { useAsync, useFetchAndLoad } from '@/hook';

const usePost = (id: string) => {
  const { loading, callEndpoint } = useFetchAndLoad();

  const [post, setPost] = useState<any>({});

  const getApiData = async () => {
    const response = await callEndpoint(getPostById(id));
    return response;
  };

  const postAdapterPrint = (data: any) => {
    setPost(postAdapter(data.data));
  };

  useAsync(getApiData, postAdapterPrint, () => {});

  return {
    ...post,
    loading,
  };
};

export default usePost;
