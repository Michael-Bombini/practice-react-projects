interface Props {
  comment: string;
  email: string;
}

export default function Comment({ comment, email }: Props) {
  return <div className="bg-white w-full p-4">
    <div className="text-sm my-2">{email}</div>
    <p className="text-xl">{comment}</p>
  </div>;
}
