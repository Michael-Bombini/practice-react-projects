import ButtonNavigate from "../ui/ButtonNavigate";

interface Props {
  userId: number;
  username: string;
  companyName: string;
  email: string;
  website: string;
}

export default function UserCard({ userId, username, companyName, email, website }: Props) {
  return (
    <li className="bg-white">
      <div className="text-ellipsis border-b-2 text-3xl border-black p-4">
        {username}
      </div>
      <div className="text-ellipsis text-xl border-b-2 border-black p-4">
        <div>{companyName}</div>
        <div>{email}</div>
        <div>{website}</div>
      </div>
      <div className="p-4 flex justify-end">
        <ButtonNavigate routeName="user" userId={userId} />
      </div>
    </li>
  );
}
