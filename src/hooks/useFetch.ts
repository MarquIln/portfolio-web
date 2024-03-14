import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      api.get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch(() => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [])

    return { data, loading, error };
}