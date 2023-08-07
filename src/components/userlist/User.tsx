interface User {
  name: string;
}

export default function User({ name }: User) {
  return <div>{name}</div>;
}
