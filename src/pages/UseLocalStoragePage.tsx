import useLocalStorage from "../components/uselocalstorage/useLocalStorage";

function UseLocalStoragePage() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME", "");

  const [hobbies, setHobbies] = useLocalStorage("HOBBIES", [
    "Programming",
    "Weight Lifting",
  ]);

  return (
    <main className="flex justify-center items-center text-white flex-col">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <label>First Name</label>
        <input
          className="text-black"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <h1 className="text-xl">{firstName}</h1>
      </div>

      <div>
        <div className="list-item">{hobbies.join(", ")}</div>
        <button
        className="bg-white text-black px-2 py-1"
          onClick={() =>
            setHobbies((currentHobbies) => [...currentHobbies, "New Hobby"])
          }
        >
          Add Hobby
        </button>
      </div>
    </main>
  );
}

export default UseLocalStoragePage;
