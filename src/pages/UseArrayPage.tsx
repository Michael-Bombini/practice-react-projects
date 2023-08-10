import useArray from "../components/usearray/useArray";

export default function UseArrayPage() {
  const { arrayState, setArrayState, push, replace, remove, clear, reset } =
    useArray(["Mario", "Luigi"]);

  return (
    <div className="container mx-auto">
      {arrayState?.map((item, ind) => {
        return <div key={item + ind}>{item}</div>;
      })}
      <button
        className="bg-white my-4 text-black px-2 py-1 mr-2"
        onClick={() => push("Giovanni")}
      >
        Pushx
      </button>
      <button
        onClick={() => replace(0, "Rimpiazzo")}
        className="bg-white my-4 text-black px-2 py-1 mr-2"
      >
        Replace
      </button>
      <button
        onClick={() => clear()}
        className="bg-white my-4 text-black px-2 py-1 mr-2"
      >
        Clear
      </button>
      <button
        onClick={() => reset()}
        className="bg-white my-4 text-black px-2 py-1 mr-2"
      >
        Reset
      </button>
    </div>
  );
}
