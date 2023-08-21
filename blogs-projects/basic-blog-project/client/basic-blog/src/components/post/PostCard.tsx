import ButtonNavigate from "../ui/ButtonNavigate";

interface Props {
  userId: number;
  postId: number;
  title: string;
  body: string;
}

export default function PostCard({ userId, title, body, postId }: Props) {
  return (
    <li className="bg-white">
      <div className="text-ellipsis border-b-2 text-2xl border-black p-4">
        {title}
      </div>
      <div className="text-ellipsis text-lg border-b-2 border-black p-4">
        {body}
      </div>
      <div className="p-4 flex justify-end">
        <ButtonNavigate routeName="post" postId={postId} />
      </div>
    </li>
  );
}
