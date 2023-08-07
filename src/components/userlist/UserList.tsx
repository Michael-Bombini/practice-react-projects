import { useEffect, useState } from "react";
import User from "./User";

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

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = (await resp.json()) as User[];
        console.log(data);
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, []);
  return (
    <div className="text-center text-white text-xl">
      <h1 className="text-3xl">User List</h1>
      <>
        <ul>
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            users.map((user) => {
              return <User name={user.name} key={user.id} />;
            })}
        </ul>
      </>
    </div>
  );
}
