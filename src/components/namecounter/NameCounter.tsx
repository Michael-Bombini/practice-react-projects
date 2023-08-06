import { useState } from "react";

export default function NameCounter() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  return (
    <div className="container mx-auto">
      <div className="text-center  text-white text-xl">
        My name is {name} and i am {age} years old
        <input
          type="text"
          className="block mx-auto my-6 text-black"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => setAge((prev) => prev - 1)}
          className="bg-white text-black px-2 font-bold text-3xl mx-2"
        >
          -
        </button>
        <button
          onClick={() => setAge((prev) => prev + 1)}
          className="bg-white text-black px-2 font-bold text-3xl mx-2"
        >
          +
        </button>
      </div>
    </div>
  );
}
