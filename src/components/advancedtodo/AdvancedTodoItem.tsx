import { useState } from "react";

interface Props {
  id: string;
  name: string;
  completed: boolean;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, editedText: string) => void;
}

export default function AdvancedTodoItem({
  id,
  name,
  completed,
  onComplete,
  onDelete,
  onEdit,
}: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [edited, setEdited] = useState<string>("");

  return (
    <div className="my-4">
      {!isEditing && (
        <div className="">
          <span
            className={`${
              completed ? "line-through text-green-200" : ""
            } text-2xl font-bold`}
          >
            {name}
          </span>
          <button
            className={`bg-white text-black mx-4`}
            onClick={() => onComplete(id)}
          >
            complete
          </button>
          <button
            className={`bg-white text-black mx-4`}
            onClick={() => onDelete(id)}
          >
            delete
          </button>

          <button
            className={`bg-white text-black mx-4`}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
      {isEditing && (
        <div>
          <input
            type="text"
            placeholder={name}
            className="text-black font-bold"
            onChange={(e) => setEdited(e.target.value)}
          />
          <button
            onClick={() => {
              onEdit(id, edited);
              setIsEditing(false);
            }}
            className={`bg-green-500 text-white px-2 py-1 mx-4`}
          >
            confirm
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className={`bg-red-500 text-white px-2 py-1 mx-4`}
          >
            cancel
          </button>
        </div>
      )}
    </div>
  );
}
