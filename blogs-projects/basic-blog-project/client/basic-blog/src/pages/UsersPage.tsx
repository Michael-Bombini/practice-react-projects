import { useQuery } from "react-query";
import PostCard from "../components/post/PostCard";
import UserCard from "../components/user/UserCard";

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

export default function UsersPage() {
  async function fetchUsers() {
    const resp = await fetch("http://127.0.0.1:3000/users");
    const data: User[] = await resp.json();
    return data;
  }

  const {
    isLoading,
    error,
    data: users,
  } = useQuery<User[]>("users", fetchUsers, {
    staleTime: 60000, //1 minuto
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {(error as Error).message}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-6xl text-black font-bold py-6">Users</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {users.map((user) => (
          <UserCard
            key={user.id}
            username={user.username}
            companyName={user.company.name}
            email={user.email}
            website={user.website}
            userId={user.id}
          />
        ))}
      </ul>
    </div>
  );
}
