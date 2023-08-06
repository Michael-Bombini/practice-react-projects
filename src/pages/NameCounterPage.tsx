import { useState } from "react";
import NameCounter from "../components/namecounter/NameCounter";
import NameCounterClass from "../components/namecounter/NameCounterClass";

export default function NameCounterPage() {
  const [functional, setFunctional] = useState<boolean>(true);
  return (
    <>
      <button
        className="px-2 bg-white block"
        onClick={() => setFunctional((prev) => !prev)}
      >
        {JSON.stringify(functional)}
      </button>
      {functional && <NameCounter />}
      {!functional && <NameCounterClass />}
    </>
  );
}
