import { useState, useEffect } from "react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

function useFetchTimeout(url: string): {
  data: User[] | null;
  isLoading: boolean;
  isError: boolean;
} {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<User[] | null>([]);
  useEffect(() => {
    async function fetchData() {
      setTimeout(async () => {
        setIsLoading(true);
        setIsError(false);
        try {
          const resp = await fetch(url);
          if (!resp.ok) {
            throw new Error("failed to get data");
          }
          const data: User[] = await resp.json();
          setData(data);
          setIsLoading(false);
          console.log(data);
        } catch (e) {
          setIsError(true);
          console.error(e.message);
        }
      }, 3000);
    }
    fetchData();
  }, [url]);

  //after the useEffect
  return { data, isLoading, isError };
}

export default useFetchTimeout;
