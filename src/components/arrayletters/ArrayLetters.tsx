import { useState } from "react";

export default function ArrayLetters() {
  const [letters, setLetters] = useState<string[]>(["A", "B", "C"]);
  const [newLetter, setNewLetter] = useState("");

  function deleteFirst() {
    setLetters(letters.slice(1));
  }

  function deleteLast() {
    setLetters(letters.slice(0, -1));
  }

  function deleteSpecific(letterToDelete: string) {
    const newLetters = letters.filter((letter) => {
      return letter !== letterToDelete;
    });
    setLetters(newLetters);
  }

  function addAtStart(letterToAdd: string) {
    setLetters([letterToAdd, ...letters]);
  }

  function addAtEnd(letterToAdd: string) {
    setLetters([...letters, letterToAdd]);
  }

  function clearArray() {
    setLetters([]);
  }

  function resetToDefault() {
    setLetters(["A", "B", "C"]);
  }

  function updateLetterAtoH() {
    const newLetters = letters.map((letter) => (letter === "A" ? "H" : letter));
    setLetters(newLetters);
  }

  function addNewLetter() {
    setLetters([newLetter, ...letters]);
  }

  function addLetterAtIndex(letter: string, index: number) {
    setLetters((currentLetters) => {
      return [
        ...currentLetters.slice(0, index),
        letter,
        ...currentLetters.slice(index),
      ];
    });
  }

  return (
    <div className="text-white text-xl text-center">
      {letters.map((letter, index) => (
        <span className="px-4" key={letter + index}>
          {letter}
        </span>
      ))}
      <div className="flex flex-col gap-6 my-6">
        <button onClick={deleteFirst}>Delete First</button>
        <button onClick={deleteLast}>Delete Last</button>
        <button onClick={() => deleteSpecific("A")}>Delete Specific</button>
        <button onClick={() => addAtStart("C")}>Add at start</button>
        <button onClick={() => addAtEnd("A")}>Add at end</button>
        <button onClick={clearArray}>Clear Array</button>
        <button onClick={resetToDefault}>Reset to Default</button>
        <button onClick={updateLetterAtoH}>Update A to H</button>
        <button onClick={() => addLetterAtIndex("Z", 2)}>
          Add letter to index
        </button>
      </div>

      <div className="my-12">
        <input
          className="text-black block mx-auto"
          type="text"
          onChange={(e) => setNewLetter(e.target.value)}
        />
        <button onClick={addNewLetter}>Add new to the start</button>
      </div>
    </div>
  );
}
