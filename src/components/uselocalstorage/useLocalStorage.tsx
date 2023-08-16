import { useEffect, useState } from "react";

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const value = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : initialValue;

  const [storedValue, setStoredValue] = useState(value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
