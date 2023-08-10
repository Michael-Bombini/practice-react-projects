interface Props {
  id: string;
  name: string;
  completed: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function SimpleTodoItem({
  id,
  name,
  completed,
  onComplete,
  onDelete
}: Props) {
  return (
    <div className="my-4">
      <span    className={`${completed ? 'line-through text-green-200' : ""} text-2xl font-bold`}>{name}</span>
      <button
        className={`bg-white text-black mx-4`}
        onClick={() => onComplete(id)}
      >
        complete
      </button>
      <button onClick={() => onDelete(id)}>
        delete
      </button>
    </div>
  );
}
