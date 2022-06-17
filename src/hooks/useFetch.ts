import { useEffect, useState } from 'react';

export const useFetch = (url: string, options: RequestInit = {}) => {
  const [loading, setLoading] = useState(false);
  const [queryData, setQueryData] = useState<any>({
    data: null,
    errors: null,
  });

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(url, options);

      const json = await response.json();

      setQueryData({
        data: json,
        errors: null,
      });
    } catch (error) {
      setQueryData({
        data: null,
        errors: error,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    loading,
    data: queryData,
  };
};
