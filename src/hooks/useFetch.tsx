import { useState, useEffect } from "react";
import { fetchData } from "../services/baseService";
interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

// Custom hook to fetch data
function useFetch<T>(
  url: string,
  method: string,
  body = null,
  headers: HeadersInit = { "Content-Type": "application/json" }
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData<T>(method, url, body, headers);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, [url, method, body]); // Dependencies array

  return { data, isLoading, error };
}

export default useFetch;
