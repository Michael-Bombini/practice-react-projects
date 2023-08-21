interface Props {
  title: string;
  completed: boolean;
}

export default function TodoItem({ title, completed }: Props) {
  return (
    <li className={`text-xl font-bold ${completed ? "line-through" : ""} list-disc`}>
      {title}
    </li>
  );
}
