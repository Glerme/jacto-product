import { useEffect, useState } from 'react';

export const useFetch = (url: string, options: RequestInit = {}) => {
  const [loading, setLoading] = useState(false);
  const [queryData, setQueryData] = useState<{
    data: any;
    errors: any;
  }>({
    data: null,
    errors: null,
  });

  const fetchData = async (url: string, options: RequestInit = {}) => {
    try {
      setLoading(true);

      const response = await fetch(url, options);

      const json = await response.json();

      setQueryData({
        data: json,
        errors: null,
      });
    } catch (error) {
      console.log(error);

      setQueryData({
        data: null,
        errors: error,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url, options);
  }, []);

  return {
    loading,
    data: queryData.data,
    errors: queryData.errors,
  };
};
