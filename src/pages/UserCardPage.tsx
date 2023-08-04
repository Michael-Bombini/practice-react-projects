import UserCard from "../components/usercard/UserCard";
import UserCardClass from "../components/usercard/UserCardClass";

export default function UserCardPage() {
  return (
    <>
      <UserCard
        name="mario"
        address="via rossi 12"
        age={20}
        phoneNumber="1234567890"
      />
      <UserCardClass
        name="luigi"
        address="via verdi 24"
        age={40}
        phoneNumber="1234567891"
      />
    </>
  );
}
