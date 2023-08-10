import { useState } from "react";

function useArray<T>(array: T[]) {
  const [arrayState, setArrayState] = useState<T[]>(array);

  function push(item: T) {
    setArrayState((prev) => [...prev, item]);
  }

  function replace(index: number, item: T) {
    setArrayState((prev) => {
      return [...prev.slice(0, index), item, ...prev.slice(index + 1)];
    });
  }

  function remove(index: number) {
    const newArray = arrayState.filter((el: T, ind: number) => {
      return index !== ind ? el : "";
    });
  }

  function clear() {
    setArrayState([]);
  }

  function reset() {
    setArrayState(array);
  }

  return { arrayState, setArrayState, push, replace, remove, clear, reset };
}

export default useArray;
