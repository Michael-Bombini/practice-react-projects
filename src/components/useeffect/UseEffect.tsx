import { useEffect, useState } from "react";

export default function UseEffect() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    console.log("Re - Render");
  });

  useEffect(() => {
    console.log("Mounts");
  }, []);

  useEffect(() => {
    console.log("Name or Age changed", name, age);
  }, [name, age]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {

    return () => {
        console.log('Unmounts')
    }
  },[])

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("new name is ", name);
    }, 1000);
    //IS recommend cleaning up asynchronous effects when the component is unmounted.
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <div className="text-white">
      <input
        className="text-black"
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-white mx-4 text-black"
        onClick={() => setAge((prev) => prev + 1)}
      >
        Age Increase
      </button>
    </div>
  );
}
