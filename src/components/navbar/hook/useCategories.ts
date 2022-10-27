import { useState } from 'react';
import { useAsync, useFetchAndLoad } from '@/hook';
import { getCategories } from '@/services';
import { formattedAllCategories } from '@/utilities';

const useCategories = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [categories, setCategories] = useState<any>(null);

  const getApiData = async () => {
    const response = await callEndpoint(getCategories());
    return response;
  };

  const postAdapterPrint = (data: any) => {
    const formatted = formattedAllCategories(data.data);
    setCategories(formatted);
  };

  useAsync(getApiData, postAdapterPrint, () => {});

  return {
    loading,
    categories,
  };
};

export default useCategories;
