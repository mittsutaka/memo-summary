import useSWR from "swr";
import axios from "axios";

const useFetch = <T>(url: string) => {
  const fetcher = (url: string): Promise<T> => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};

export default useFetch;
