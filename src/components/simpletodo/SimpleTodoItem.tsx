interface Props {
  id: string;
  name: string;
  completed: boolean;
}

export default function SimpleTodoItem({ id, name, completed }: Props) {
  return <div className="my-2">{name}</div>;
}
