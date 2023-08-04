interface Props {
  name: string;
  phoneNumber: string;
  age: number;
  address: string;
}
export default function UserCard({ name, phoneNumber, age, address }: Props) {
  return (
    <div>
      {age}
      {name}
      {phoneNumber} {address}
    </div>
  );
}
