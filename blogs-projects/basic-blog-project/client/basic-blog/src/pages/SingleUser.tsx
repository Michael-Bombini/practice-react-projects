import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PostLoading from "../components/post/PostLoading";

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

export default function SingleUser() {
  const { id } = useParams();
  console.log(id);

  async function fetchUser() {
    const resp = await fetch(`http://127.0.0.1:3000/users/${id}`);
    const data: User = await resp.json();
    return data;
  }

  const {
    isLoading,
    error,
    data: user,
  } = useQuery<User>(`user${id}`, fetchUser, {
    staleTime: 60000, //1 minuto
  });

  if (isLoading) {
    return <PostLoading />;
  }

  if (error) {
    return <p>An error occurred: {(error as Error).message}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-black font-bold py-6">{user?.username}</h1>
      <h2 className="text-3xl text-black mb-2">{user?.email}</h2>
      <div>
        <div className="flex gap-6 text-2xl">
          <span className="font-bold">Company:</span>
          <div>{user?.company?.name}</div>
        </div>
        <div className="flex gap-6 text-2xl">
          <span className="font-bold">Website:</span>
          <div>{user?.website}</div>
        </div>
        <div className="flex gap-6 text-2xl">
          <span className="font-bold">Address:</span>
          <div>{user?.address?.street}</div>
        </div>
      </div>
    </div>
  );
}
