import useFetch from "../components/usefetchcustomhook/UseFetch";

export default function UseFetchPage() {
  const { data, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <main>
      {!isLoading && (
        <div>
          {JSON.stringify(data)}
          {JSON.stringify(isLoading)}
          {JSON.stringify(isError)}
        </div>
      )}
      {isLoading && <p>Loading...</p>}
    </main>
  );
}
